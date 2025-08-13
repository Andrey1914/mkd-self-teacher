import { PrismaClient } from "@prisma/client";
import { lessons } from "@/prisma/lessons";
import type { LessonData } from "@/types";

const prisma = new PrismaClient();

async function main() {
  console.log("Запуск сидинга...");

  for (const lesson of lessons as LessonData[]) {
    try {
      await prisma.$transaction(
        async (tx) => {
          const existing = await tx.lesson.findUnique({
            where: { slug: lesson.slug },
          });

          const createdOrExistingLesson = existing
            ? existing
            : await tx.lesson.create({
                data: {
                  title: lesson.title?.join(", ") ?? "Урок без названия.",
                  slug: lesson.slug,
                },
              });

          const lessonId = createdOrExistingLesson.id;

          console.log(
            existing
              ? `ℹ️ Урок "${lesson.slug}" уже существует. Данные будут дополнены.`
              : `✅ Урок "${lesson.slug}" создан.`
          );

          // 📘 Sections и таблицы
          for (const section of lesson.sections ?? []) {
            const sectionTitle = Array.isArray(section.title)
              ? section.title.join(", ")
              : section.title ?? "";

            const existingSection = await tx.section.findFirst({
              where: {
                title: sectionTitle,
                type: section.type,
                lessonId,
              },
            });

            const createdSection = existingSection
              ? existingSection
              : await tx.section.create({
                  data: {
                    type: section.type,
                    title: sectionTitle,
                    content: "content" in section ? section.content ?? {} : {},
                    lessonId,
                  },
                });

            if (existingSection) {
              console.log(
                `ℹ️ Section "${sectionTitle}" уже существует, пропущен.`
              );
              continue;
            } else {
              console.log(`✅ Section "${sectionTitle}" создан.`);
            }

            // ✅ Table entries
            if (
              section.tableEntries &&
              typeof section.tableEntries === "object" &&
              Array.isArray(section.tableEntries.create)
            ) {
              for (const entry of section.tableEntries.create) {
                const exists = await tx.tableEntry.findFirst({
                  where: {
                    sectionId: createdSection.id,
                    title: entry.title,
                    rows: { equals: entry.rows },
                  },
                });

                if (exists) continue;

                await tx.tableEntry.create({
                  data: {
                    ...entry,
                    sectionId: createdSection.id,
                  },
                });

                console.log(`✅ TableEntry добавлен.`);
              }
            }
          }

          for (const exercise of lesson.exercises ?? []) {
            const existingExercise = await tx.exercise.findFirst({
              where: {
                title: exercise.title,
                lessonId,
              },
            });

            if (existingExercise) {
              const section = exercise.sections?.[0];
              const newData = {
                type: exercise.type ?? "default_type",
                slug: exercise.slug,
                title: exercise.title ?? "Без названия",
                prompt: section?.prompt ?? [],
                content: section?.content ?? {},
              };

              const isSame =
                existingExercise.type === newData.type &&
                existingExercise.slug === newData.slug &&
                existingExercise.title === newData.title &&
                JSON.stringify(existingExercise.prompt) ===
                  JSON.stringify(newData.prompt) &&
                JSON.stringify(existingExercise.content) ===
                  JSON.stringify(newData.content);

              if (isSame) {
                console.log(
                  `ℹ️ Exercise "${exercise.title}" уже существует, пропущен.`
                );
                continue;
              }

              try {
                await tx.exercise.update({
                  where: { id: existingExercise.id },
                  data: { ...newData },
                });
                console.log(`♻️ Exercise "${exercise.title}" обновлён.`);
              } catch (error) {
                console.error(
                  `❌ Ошибка при обновлении упражнения "${exercise.title}":`,
                  error
                );
              }
              continue;
            }

            if (!exercise.sections?.[0]) {
              console.warn(
                `⚠️ "${exercise.title}" → sections =`,
                JSON.stringify(exercise.sections)
              );
              continue;
            }

            const section = exercise.sections?.[0];

            if (!section) {
              console.warn(
                `⚠️ Упражнение "${exercise.title}" пропущено — section[0] невалидный.`,
                JSON.stringify(exercise.sections)
              );
              continue;
            }

            if (!Array.isArray(section.prompt)) {
              console.warn(
                `⚠️ Упражнение "${exercise.title}" пропущено — prompt не массив строк.`
              );
              continue;
            }

            try {
              await tx.exercise.create({
                data: {
                  type: exercise.type ?? "default_type",
                  slug: exercise.slug,
                  title: exercise.title ?? "Без названия",
                  prompt: section.prompt,
                  content: section.content ?? {},
                  lessonId,
                },
              });

              console.log(`✅ Exercise "${exercise.title}" добавлен.`);
            } catch (error) {
              console.error(
                `❌ Ошибка при добавлении упражнения "${exercise.title}":`,
                error
              );
            }
          }

          // 📘 Glossary entries
          for (const entry of lesson.glossary ?? []) {
            const exists = await tx.glossaryEntry.findFirst({
              where: { word: entry.word, lessonId },
            });
            if (exists) {
              console.log(
                `ℹ️ GlossaryEntry "${entry.word}" уже существует, пропущен.`
              );
              continue;
            }

            try {
              await tx.glossaryEntry.create({ data: { ...entry, lessonId } });

              console.log(`✅ GlossaryEntry "${entry.word}" добавлен.`);
            } catch (error) {
              console.error(
                `❌ Ошибка при добавлении GlossaryEntry "${entry.word}":`,
                error
              );
            }
          }

          // 📘 Dialogue blocks
          for (const dialogue of lesson.dialogues ?? []) {
            const exists = await tx.dialogueBlock.findFirst({
              where: { content: { equals: dialogue }, lessonId },
            });
            if (exists) {
              console.log(
                `ℹ️ DialogueBlock "${dialogue}" уже существует, пропущен.`
              );
              continue;
            }

            try {
              await tx.dialogueBlock.create({
                data: { content: dialogue, lessonId },
              });

              console.log(`✅ DialogueBlock "${dialogue}" добавлен.`);
            } catch (error) {
              console.error(
                `❌ Ошибка при добавлении DialogueBlock "${dialogue}":`,
                error
              );
            }
          }

          // 📘 Paragraph blocks
          for (const paragraph of lesson.paragraph ?? []) {
            const subtype = Array.isArray(paragraph.subtitle)
              ? paragraph.subtitle.join(", ")
              : paragraph.subtitle;

            const content = paragraph.content ?? {};

            const existing = await tx.paragraphBlock.findFirst({
              where: {
                type: paragraph.type,
                subtype,
                lessonId,
              },
            });

            if (existing) {
              const existingText =
                typeof existing.content === "object" &&
                existing.content !== null &&
                "text" in existing.content
                  ? existing.content.text ?? ""
                  : "";

              const newText = content.text ?? "";

              if (existingText === newText) {
                console.log(
                  `ℹ️ ParagraphBlock "${paragraph.type}" уже существует, пропущен.`
                );
                continue;
              }

              await tx.paragraphBlock.update({
                where: { id: existing.id },
                data: { content },
              });

              console.log(`♻️ ParagraphBlock "${paragraph.type}" обновлен.`);
            } else {
              await tx.paragraphBlock.create({
                data: {
                  type: paragraph.type,
                  subtype,
                  content,
                  lessonId,
                },
              });

              console.log(
                `✅ Добавлен ParagraphBlock "${paragraph.type}", subtype: "${subtype}".`
              );
            }
          }

          // 📘 Pay attention blocks
          for (const block of lesson.payAttention ?? []) {
            const slug = block.sections?.[0]?.slug ?? "";
            const type = block.sections?.[0]?.type ?? "";
            const contentText = block.sections?.[0]?.content?.text ?? "";

            if (!slug || !type) {
              console.error(
                `❌ Пропущен PayAttentionBlock — нет slug или type в ${JSON.stringify(
                  block
                )}`
              );
              continue;
            }

            const exists = await tx.payAttentionBlock.findFirst({
              where: {
                type,
                lessonId,
              },
            });

            const contentObject = { text: contentText };

            if (exists) {
              const existingText =
                typeof exists.content === "object" &&
                exists.content !== null &&
                !Array.isArray(exists.content) &&
                "text" in exists.content
                  ? (exists.content as { text: string }).text
                  : "";

              if (existingText !== contentText) {
                await tx.payAttentionBlock.update({
                  where: { id: exists.id },
                  data: {
                    content: contentObject,
                    slug,
                  },
                });
                console.log(`♻️ Обновлён PayAttentionBlock "${type}"`);
              } else {
                console.log(
                  `ℹ️ PayAttentionBlock "${type}" без изменений, пропущен.`
                );
              }
              continue;
            }

            try {
              await tx.payAttentionBlock.create({
                data: {
                  slug,
                  type,
                  content: contentObject,
                  lessonId,
                },
              });
              console.log(`✅ Добавлен PayAttentionBlock "${type}"`);
            } catch (error) {
              console.error(
                `❌ Ошибка при добавлении PayAttentionBlock "${type}":`,
                error
              );
            }
          }

          // 📘 Table blocks (из папки tables)
          let exampleIndex = 1;

          for (const tableBlock of lesson.tables ?? []) {
            const rawTitle =
              "title" in tableBlock ? tableBlock.title : undefined;

            const title =
              typeof rawTitle === "string"
                ? rawTitle
                : `example-${exampleIndex++}`;

            const content = tableBlock?.content ?? tableBlock?.data?.content;

            if (!content) {
              console.error(
                `❌ Пропущен tableBlock без content. title: ${title}`
              );
              continue;
            }

            const exists = await tx.tableBlock.findFirst({
              where: {
                title,
                lessonId,
              },
            });

            if (exists) {
              console.log(`ℹ️ TableBlock "${title}" уже существует, пропущен.`);
              continue;
            }

            await tx.tableBlock.create({
              data: {
                title,
                category: tableBlock.type ?? undefined,
                data: JSON.parse(JSON.stringify(tableBlock)),
                lessonId,
              },
            });

            console.log(`✅ Добавлен tableBlock. title: ${title}`);
          }

          // 📘 Vocabulary (если есть секция типа "vocabulary")
          for (const vocab of lesson.vocabulary ?? []) {
            const sections = vocab.sections ?? [];

            for (const sec of sections) {
              if (sec.type !== "vocabulary") continue;

              const words = sec.content?.words ?? [];
              console.log(`🔡 Vocabulary words: ${words.length}`);

              for (const word of words) {
                const term = word.mkd?.trim();
                const pron = word.pron?.trim();
                const translation = word.ru?.trim();

                if (!term || !translation) continue;

                const existing = await tx.vocabularyEntry.findFirst({
                  where: { word: term, translation, lessonId },
                });

                if (existing) {
                  const needUpdate =
                    (existing.pronunciation ?? "") !== (pron ?? "") ||
                    (existing.translation ?? "") !== translation;

                  if (needUpdate) {
                    await tx.vocabularyEntry.update({
                      where: { id: existing.id },
                      data: {
                        pronunciation: pron,
                        translation,
                      },
                    });
                    console.log(`♻️ Обновлён VocabularyEntry "${term}"`);
                  } else {
                    console.log(
                      `ℹ️ VocabularyEntry "${term}" уже существует, пропущены.`
                    );
                  }

                  continue;
                }

                await tx.vocabularyEntry.create({
                  data: {
                    word: term,
                    pronunciation: pron,
                    translation,
                    lessonId,
                  },
                });

                console.log(`✅ Добавлен VocabularyEntry "${term}"`);
              }
            }
          }

          console.log(`🎉 Данные для урока "${lesson.slug}" обработаны.\n`);
        },
        {
          maxWait: 10000,
          timeout: 20000,
        }
      );
    } catch (error) {
      console.error(
        `\n--- ❌ ОШИБКА при сидинге урока "${lesson.slug}". Транзакция отменена. ---\n`,
        error instanceof Error ? error.message : error
      );
    }
  }
}

main()
  .catch((err) => {
    console.error("Критическая ошибка во время выполнения сидинга:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Соединение с базой данных закрыто.");
  });
