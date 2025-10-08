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
                  title: lesson.title ?? {},
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
              : section.title ?? {};

            const existingSection = await tx.section.findFirst({
              where: {
                title: { equals: sectionTitle },
                type: section.type,
                lessonId,
              },
            });

            const createdSection = existingSection
              ? existingSection
              : await tx.section.create({
                  data: {
                    type: section.type,
                    slug: section.slug,
                    title: sectionTitle,
                    ...("subtitle" in section &&
                    section.subtitle &&
                    Object.keys(section.subtitle).length > 0
                      ? { subtitle: section.subtitle }
                      : {}),

                    ...("content" in section &&
                    section.content &&
                    Object.keys(section.content).length > 0
                      ? { content: section.content }
                      : {}),
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

          //Exercises
          let skippedCount = 0;
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
                skippedCount++;
              } else {
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
                  slug: exercise.slug ?? "default_slug",
                  title: exercise.title ?? "Без названия.",
                  prompt: section.prompt,
                  answerSet: section.answerSet ?? {},
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
          if (skippedCount > 0) {
            console.log(
              `ℹ️ Пропущено ${skippedCount} уже существующих упражнений.`
            );
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
            try {
              const existing = await tx.dialogueBlock.findFirst({
                where: { lessonId },
              });

              if (existing) {
                if (
                  JSON.stringify(existing.content) !== JSON.stringify(dialogue)
                ) {
                  await tx.dialogueBlock.update({
                    where: { id: existing.id },
                    data: { content: dialogue },
                  });
                  console.log(`♻️ DialogueBlock "${dialogue}" обновлён.`);
                } else {
                  console.log(
                    `ℹ️ DialogueBlock "${dialogue}" уже существует, пропущен.`
                  );
                }
              } else {
                await tx.dialogueBlock.create({
                  data: { content: dialogue, lessonId },
                });
                console.log(`✅ DialogueBlock "${dialogue}" добавлен.`);
              }
            } catch (error) {
              console.error(
                `❌ Ошибка при обработке DialogueBlock "${dialogue}":`,
                error
              );
            }
          }

          // 📘 Paragraph blocks
          for (const paragraph of lesson.paragraph ?? []) {
            const slug = paragraph.slug;
            const subtitle = Array.isArray(paragraph.subtitle)
              ? paragraph.subtitle.join(", ")
              : paragraph.subtitle;

            const intro = paragraph.intro;
            const content = paragraph.content ?? {};

            const existing = await tx.paragraphBlock.findFirst({
              where: {
                slug,
                type: paragraph.type,
                lessonId,
              },
            });

            if (existing) {
              const typeChanged = existing.type !== paragraph.type;
              const slugChanged = existing.slug !== paragraph.slug;
              const existingSubtitle = existing.subtitle ?? null;
              const newSubtitle = subtitle ?? null;
              const subtitleChanged = existingSubtitle !== newSubtitle;
              const existingIntro = existing.intro ?? "";
              const newIntro = intro ?? "";
              const introChanged = existingIntro !== newIntro;

              const existingContentText =
                typeof existing.content === "object" &&
                existing.content !== null &&
                "text" in existing.content
                  ? existing.content.text
                  : "";

              const newContentText = content.text ?? "";
              const contentChanged = existingContentText !== newContentText;

              if (
                !typeChanged &&
                !slugChanged &&
                !subtitleChanged &&
                !introChanged &&
                !contentChanged
              ) {
                console.log(
                  `ℹ️ ParagraphBlock "${paragraph.type}" не изменился, пропущен.`
                );
                continue;
              }

              await tx.paragraphBlock.update({
                where: { id: existing.id },
                data: {
                  type: paragraph.type,
                  slug: paragraph.slug,
                  subtitle,
                  content,
                  ...(intro !== undefined ? { intro } : {}),
                },
              });

              console.log(`♻️ ParagraphBlock "${paragraph.type}" обновлен.`);
            } else {
              await tx.paragraphBlock.create({
                data: {
                  type: paragraph.type,
                  slug: paragraph.slug,
                  subtitle,
                  content,
                  lessonId,
                  ...(intro !== undefined ? { intro } : {}),
                },
              });

              console.log(
                `✅ Добавлен ParagraphBlock "${paragraph.type}", subtitle: "${subtitle}".`
              );
            }
          }

          // 📘 Pay attention blocks
          for (const block of lesson.payAttention ?? []) {
            const slug = block.sections?.[0]?.slug ?? "";
            const type = block.sections?.[0]?.type ?? "";
            const rawTitle = block.sections?.[0]?.title;
            const contentText = block.sections?.[0]?.content?.text ?? "";

            if (!slug || !type) {
              console.error(
                `❌ Пропущен PayAttentionBlock — нет slug или type в ${JSON.stringify(
                  block
                )}`
              );
              continue;
            }

            const title: string = rawTitle || type || "Без названия";

            const exists = await tx.payAttentionBlock.findFirst({
              where: {
                type,
                lessonId,
              },
              select: {
                id: true,
                content: true,
                slug: true,
                type: true,
              },
            });

            const contentObject = { text: contentText };

            if (exists) {
              // const existingTitle = exists.title || "";
              const existingText =
                typeof exists.content === "object" &&
                exists.content !== null &&
                !Array.isArray(exists.content) &&
                "text" in exists.content
                  ? (exists.content as { text: string }).text
                  : "";

              // const isTitleDifferent = existingTitle !== title;

              if (existingText !== contentText) {
                await tx.payAttentionBlock.update({
                  where: { id: exists.id },
                  data: {
                    title,
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
                  title,
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
          for (const tableBlock of lesson.tables ?? []) {
            const rawTitle =
              "title" in tableBlock ? tableBlock.title : undefined;

            let title: string | { ru?: string; mkd?: string };
            let displayTitle: string;

            if (typeof rawTitle === "string") {
              title = rawTitle;
              displayTitle = rawTitle;
            } else if (
              rawTitle &&
              typeof rawTitle === "object" &&
              !Array.isArray(rawTitle)
            ) {
              title = rawTitle as { ru?: string; mkd?: string };
              displayTitle = title.ru || title.mkd || tableBlock.type;
            } else {
              title = tableBlock.type;
              displayTitle = tableBlock.type;
            }

            const content = tableBlock?.content ?? tableBlock?.data?.content;
            if (!content) {
              console.error(
                `❌ Пропущен tableBlock без content. title: ${displayTitle}`
              );
              continue;
            }

            const slug = tableBlock.slug;

            const subtitleValue = tableBlock.subtitle
              ? Array.isArray(tableBlock.subtitle)
                ? tableBlock.subtitle.join(", ")
                : tableBlock.subtitle
              : null;

            const exists = await tx.tableBlock.findFirst({
              where: {
                category: tableBlock.type,
                slug: slug,
                lessonId,
              },
            });

            const jsonData = JSON.parse(
              JSON.stringify({
                content: content,
              })
            );

            if (exists) {
              const titleChanged =
                JSON.stringify(exists.title) !== JSON.stringify(title);

              const subtitleChanged = exists.subtitle !== subtitleValue;

              const dataChanged =
                JSON.stringify(exists.data) !== JSON.stringify(jsonData);

              if (titleChanged || subtitleChanged || dataChanged) {
                await tx.tableBlock.update({
                  where: { id: exists.id },
                  data: {
                    title,
                    subtitle: subtitleValue,
                    data: jsonData,
                  },
                });
                console.log(`♻️ Обновлён TableBlock "${displayTitle}"`);
              } else {
                console.log(`ℹ️ TableBlock "${displayTitle}" без изменений`);
              }
              continue;
            }

            await tx.tableBlock.create({
              data: {
                slug,
                title,
                subtitle: subtitleValue,
                category: tableBlock.type ?? undefined,
                data: jsonData,
                lessonId,
              },
            });

            console.log(`✅ Добавлен tableBlock. title: ${displayTitle}`);
          }

          // 📘 Vocabulary (если есть секция типа "vocabulary")
          let vocabularyIndex = 1;
          for (const vocab of lesson.vocabulary ?? []) {
            let title: string | { ru?: string; mkd?: string };
            let displayTitle: string;

            if (!vocab.title) {
              title = `vocabulary-${vocabularyIndex}`;
              displayTitle = title;
            } else if (typeof vocab.title === "string") {
              title = vocab.title;
              displayTitle = vocab.title;
            } else if (
              typeof vocab.title === "object" &&
              vocab.title !== null
            ) {
              title = vocab.title as { ru?: string; mkd?: string };
              displayTitle =
                title.ru || title.mkd || `vocabulary-${vocabularyIndex}`;
            } else {
              title = `vocabulary-${vocabularyIndex}`;
              displayTitle = title;
            }

            const slug = vocab.slug || `vocabulary-${vocabularyIndex}`;
            const uniqueSlug = `${slug}-${vocabularyIndex}`;

            const existing = await tx.vocabularyEntry.findFirst({
              where: {
                slug: uniqueSlug,
                lessonId,
              },
            });

            const newContent = JSON.parse(JSON.stringify(vocab.sections));

            if (existing) {
              const existingContentStr = JSON.stringify(existing.content);
              const newContentStr = JSON.stringify(newContent);
              const titleChanged =
                JSON.stringify(existing.title) !== JSON.stringify(title);
              const contentChanged = existingContentStr !== newContentStr;

              if (titleChanged || contentChanged) {
                const changes: string[] = [];
                const updatedWords: string[] = [];

                if (titleChanged) {
                  changes.push("заголовок");
                }

                if (contentChanged) {
                  type WordType = { mkd?: string; ru?: string; pron?: string };

                  const existingWords: WordType[] = [];
                  try {
                    const existingContent = existing.content;
                    if (Array.isArray(existingContent)) {
                      existingContent.forEach((section) => {
                        if (
                          section &&
                          typeof section === "object" &&
                          "content" in section
                        ) {
                          const content = section.content;
                          if (
                            content &&
                            typeof content === "object" &&
                            "words" in content
                          ) {
                            const words = content.words;
                            if (Array.isArray(words)) {
                              words.forEach((word) => {
                                if (word && typeof word === "object") {
                                  existingWords.push(word as WordType);
                                }
                              });
                            }
                          }
                        }
                      });
                    }
                  } catch (e) {
                    console.log(
                      "❌ Ошибка при извлечении существующих слов:",
                      e
                    );
                  }

                  const newWords: WordType[] = [];
                  vocab.sections?.forEach((section) => {
                    section.content?.words?.forEach((word) => {
                      newWords.push(word);
                    });
                  });

                  newWords.forEach((newWord) => {
                    if (!newWord.mkd) return;

                    const oldWord = existingWords.find(
                      (w) => w.mkd === newWord.mkd
                    );
                    if (oldWord) {
                      if (
                        oldWord.ru !== newWord.ru ||
                        oldWord.pron !== newWord.pron
                      ) {
                        updatedWords.push(newWord.mkd);
                      }
                    } else {
                      updatedWords.push(`+${newWord.mkd}`);
                    }
                  });

                  existingWords.forEach((oldWord) => {
                    if (!oldWord.mkd) return;

                    const stillExists = newWords.some(
                      (w) => w.mkd === oldWord.mkd
                    );
                    if (!stillExists) {
                      updatedWords.push(`-${oldWord.mkd}`);
                    }
                  });

                  if (updatedWords.length > 0) {
                    changes.push(
                      `♻️ Обновлены слова: ${updatedWords.join(", ")}`
                    );
                  } else {
                    changes.push("структура словаря");
                  }
                }

                await tx.vocabularyEntry.update({
                  where: { id: existing.id },
                  data: {
                    title,
                    content: newContent,
                  },
                });

                const wordsCount =
                  vocab.sections?.reduce((total, section) => {
                    return total + (section.content?.words?.length ?? 0);
                  }, 0) ?? 0;

                console.log(
                  `♻️ Обновлен Vocabulary "${displayTitle}": ${changes.join(
                    ", "
                  )} (🔡 всего ${wordsCount} слов)`
                );
              } else {
                console.log(
                  `ℹ️ Vocabulary "${displayTitle}" не изменился, пропущен.`
                );
              }
              vocabularyIndex++;
              continue;
            }

            await tx.vocabularyEntry.create({
              data: {
                title,
                slug: uniqueSlug,
                content: newContent,
                lessonId,
              },
            });

            const wordsCount =
              vocab.sections?.reduce((total, section) => {
                return total + (section.content?.words?.length ?? 0);
              }, 0) ?? 0;

            console.log(
              `✅ Добавлен Vocabulary "${displayTitle}" с ${wordsCount} словами`
            );
            vocabularyIndex++;
          }

          console.log(`🎉 Данные для урока "${lesson.slug}" обработаны.\n`);
        },
        {
          maxWait: 10000,
          timeout: 20000,
        }
        //----------------------------------------------------------------------------------------
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
