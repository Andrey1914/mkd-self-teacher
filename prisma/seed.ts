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
          // ✅ Получаем lesson: либо существующий, либо создаём
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
            const createdSection = await tx.section.create({
              data: {
                type: section.type,
                title: Array.isArray(section.title)
                  ? section.title.join(", ")
                  : section.title,
                content:
                  "content" in section ? (section.content as object) : {},
                lessonId,
              },
            });

            for (const table of section.tableEntries?.create ?? []) {
              await tx.tableEntry.create({
                data: { ...table, sectionId: createdSection.id },
              });
            }

            if (
              "exercises" in section &&
              section.exercises &&
              typeof section.exercises === "object" &&
              "create" in section.exercises &&
              Array.isArray(section.exercises.create)
            ) {
              for (const exercise of section.exercises.create) {
                await tx.exercise.create({
                  data: { ...exercise, sectionId: createdSection.id, lessonId },
                });
              }
            }
          }

          // 📘 Glossary entries
          for (const entry of lesson.glossary ?? []) {
            const exists = await tx.glossaryEntry.findFirst({
              where: { word: entry.word, lessonId },
            });
            if (exists) continue;

            await tx.glossaryEntry.create({ data: { ...entry, lessonId } });
          }

          // 📘 Dialogue blocks
          for (const dialogue of lesson.dialogues ?? []) {
            const exists = await tx.dialogueBlock.findFirst({
              where: { content: { equals: dialogue }, lessonId },
            });
            if (exists) continue;

            await tx.dialogueBlock.create({
              data: { content: dialogue, lessonId },
            });
          }

          // 📘 Paragraph blocks
          for (const paragraph of lesson.paragraph ?? []) {
            const subtype = Array.isArray(paragraph.subtitle)
              ? paragraph.subtitle.join(", ")
              : paragraph.subtitle;

            const exists = await tx.paragraphBlock.findFirst({
              where: {
                type: paragraph.type,
                subtype,
                lessonId,
              },
            });
            if (exists) continue;

            await tx.paragraphBlock.create({
              data: {
                type: paragraph.type,
                subtype,
                content: JSON.parse(JSON.stringify(paragraph.content ?? {})),
                lessonId,
              },
            });
          }

          // 📘 Pay attention blocks
          for (const attention of lesson.payAttention ?? []) {
            const exists = await tx.payAttentionBlock.findFirst({
              where: { content: { equals: attention }, lessonId },
            });
            if (exists) continue;

            await tx.payAttentionBlock.create({
              data: { content: attention, lessonId },
            });
          }

          // 📘 Table blocks (из папки tables)

          for (const [index, tableBlock] of (lesson.tables ?? []).entries()) {
            const rawTitle =
              "title" in tableBlock ? tableBlock.title : undefined;

            const title = Array.isArray(rawTitle)
              ? rawTitle.join(", ")
              : typeof rawTitle === "string"
              ? rawTitle
              : `table-${index}`;

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

            console.log(
              `✅ Добавлен tableBlock. title: ${title ?? "Без названия"}`
            );
          }

          // 📘 Vocabulary (если есть секция типа "vocabulary")
          for (const section of lesson.sections ?? []) {
            if (
              section.type === "vocabulary" &&
              "content" in section &&
              section.content &&
              typeof section.content === "object" &&
              "words" in section.content &&
              Array.isArray(section.content.words)
            ) {
              const words = section.content.words ?? [];

              for (const word of words) {
                const term = word.mkd && word.pron;
                if (!term || !word.ru) continue;

                const exists = await tx.vocabularyEntry.findFirst({
                  where: {
                    word: term,
                    translation: word.ru,
                    lessonId,
                  },
                });

                if (exists) continue;

                await tx.vocabularyEntry.create({
                  data: {
                    word: term,
                    translation: word.ru,
                    lessonId,
                  },
                });
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

// v-02 worked-------------------------------------------------------------------------------------------------------------------------
// import { PrismaClient } from "@prisma/client";
// import { lessons } from "@/prisma/lessons";

// import type { LessonData } from "@/types";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("Запуск сидинга...");

//   for (const lesson of lessons as LessonData[]) {
//     const existing = await prisma.lesson.findUnique({
//       where: { slug: lesson.slug },
//     });

//     if (existing) {
//       console.log(`Урок "${lesson.slug}" уже существует. Пропущен.`);
//       // continue;
//     }

//     try {
//       await prisma.$transaction(
//         async (tx) => {
//           let lessonId: string;

//           if (existing) {
//             lessonId = existing.id;
//           } else {
//             const createdLesson = await tx.lesson.create({
//               data: {
//                 title: lesson.title?.join(", ") ?? "Урок без названия.",
//                 slug: lesson.slug,
//               },
//             });
//             lessonId = createdLesson.id;
//           }

//           // const createdLesson = await tx.lesson.create({
//           //   data: {
//           //     title: lesson.title?.join(", ") ?? "Урок без названия.",
//           //     slug: lesson.slug,
//           //   },
//           // });

//           // const lessonId = createdLesson.id;

//           for (const section of lesson.sections ?? []) {
//             const createdSection = await tx.section.create({
//               data: {
//                 type: section.type,
//                 title: Array.isArray(section.title)
//                   ? section.title.join(", ")
//                   : section.title,
//                 content:
//                   "content" in section ? (section.content as object) : {},
//                 lessonId: lessonId,
//               },
//             });

//             if (
//               "tableEntries" in section &&
//               section.tableEntries &&
//               typeof section.tableEntries === "object" &&
//               "create" in section.tableEntries &&
//               Array.isArray(section.tableEntries.create)
//             ) {
//               for (const table of section.tableEntries.create) {
//                 await tx.tableEntry.create({
//                   data: { ...table, sectionId: createdSection.id },
//                 });
//               }
//             }

//             for (const table of section.tableEntries?.create ?? []) {
//               await tx.tableEntry.create({
//                 data: { ...table, sectionId: createdSection.id },
//               });
//             }

//             if (
//               "exercises" in section &&
//               section.exercises &&
//               typeof section.exercises === "object" &&
//               "create" in section.exercises &&
//               Array.isArray(section.exercises.create)
//             ) {
//               for (const exercise of section.exercises.create) {
//                 await tx.exercise.create({
//                   data: { ...exercise, sectionId: createdSection.id, lessonId },
//                 });
//               }
//             }
//           }
//           for (const entry of lesson.glossary ?? []) {
//             await tx.glossaryEntry.create({ data: { ...entry, lessonId } });
//           }
//           for (const dialogue of lesson.dialogues ?? []) {
//             await tx.dialogueBlock.create({
//               data: { content: dialogue, lessonId },
//             });
//           }

//           for (const paragraph of lesson.paragraph ?? []) {
//             const subtype = Array.isArray(paragraph.subtitle)
//               ? paragraph.subtitle.join(", ")
//               : paragraph.subtitle;
//             await tx.paragraphBlock.create({
//               data: {
//                 type: paragraph.type,
//                 subtype: subtype,
//                 content: JSON.parse(JSON.stringify(paragraph.content ?? {})),
//                 lessonId,
//               },
//             });
//           }

//           for (const attention of lesson.payAttention ?? []) {
//             await tx.payAttentionBlock.create({
//               data: { content: attention, lessonId },
//             });
//           }

//           for (const tableBlock of lesson.tables ?? []) {
//             const title =
//               "title" in tableBlock && Array.isArray(tableBlock.title)
//                 ? tableBlock.title.join(", ")
//                 : typeof tableBlock.title === "string"
//                 ? tableBlock.title
//                 : undefined;

//             const content = tableBlock?.content ?? tableBlock?.data?.content;

//             if (!content) {
//               console.error(
//                 `❌ Пропущен tableBlock без content. title: ${title}`
//               );
//               continue;
//             }

//             try {
//               await tx.tableBlock.create({
//                 data: {
//                   title,
//                   data: JSON.parse(JSON.stringify(tableBlock)),
//                   lessonId,
//                 },
//               });

//               console.log(
//                 `✅ Добавлен tableBlock. title: ${title ?? "Без названия"}`
//               );
//             } catch (err) {
//               console.error(
//                 `❌ Ошибка при добавлении tableBlock "${
//                   title ?? "Без названия"
//                 }":`,
//                 err
//               );
//             }
//           }

//           // for (const tableBlock of lesson.tables ?? []) {
//           //   const title =
//           //     "title" in tableBlock && Array.isArray(tableBlock.title)
//           //       ? tableBlock.title.join(", ")
//           //       : typeof tableBlock.title === "string"
//           //       ? tableBlock.title
//           //       : undefined;

//           //   const content = tableBlock?.content ?? tableBlock?.data?.content;

//           //   if (!content) {
//           //     console.error(`❌ Нет content у tableBlock с title: ${title}`);
//           //     continue;
//           //   }

//           //   await tx.tableBlock.create({
//           //     data: {
//           //       category: tableBlock.type,
//           //       title,
//           //       data: JSON.parse(JSON.stringify(tableBlock)),
//           //       lessonId,
//           //     },
//           //   });
//           // }

//           if (lesson.sections && Array.isArray(lesson.sections)) {
//             for (const section of lesson.sections) {
//               if (section.type === "vocabulary") {
//                 if (
//                   "content" in section &&
//                   section.content &&
//                   typeof section.content === "object" &&
//                   "words" in section.content &&
//                   Array.isArray(section.content.words)
//                 ) {
//                   for (const word of section.content.words) {
//                     const words = word.mkd && word.pron;
//                     await tx.vocabularyEntry.create({
//                       data: {
//                         word: words,
//                         translation: word.ru,
//                         lessonId,
//                       },
//                     });
//                   }
//                 }
//               }
//             }
//           }

//           console.log(`Урок "${lesson.slug}" успешно добавлен в транзакции.`);
//         },
//         {
//           maxWait: 10000,
//           timeout: 20000,
//         }
//       );
//     } catch (error) {
//       console.error(
//         `\n--- ОШИБКА при сидинге урока "${lesson.slug}". Транзакция отменена. ---\n`,
//         error instanceof Error ? error.message : error
//       );
//     }
//   }
// }

// main()
//   .catch((err) => {
//     console.error("Критическая ошибка во время выполнения сидинга:", err);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//     console.log("Соединение с базой данных закрыто.");
//   });

// v-0_worked-------------------------------------------------------------------------------------------------------------------------
// import { prisma } from "../lib/prisma";
// import { lessons } from "@/prisma/lessons";
// import { SectionWithTables } from "@/types";

// async function main() {
//   for (const lesson of lessons) {
//     const existing = await prisma.lesson.findUnique({
//       where: { slug: lesson.slug },
//     });

//     if (existing) {
//       console.log(`Пропущен: ${lesson.slug}`);
//       continue;
//     }

//     const createdLesson = await prisma.lesson.create({
//       data: {
//         title: lesson.title.join(", "),
//         slug: lesson.slug,
//       },
//     });

//     for (const section of lesson.sections) {
//       const createdSection = await prisma.section.create({
//         data: {
//           type: section.type,
//           title: section.title?.join(", "),
//           content: "content" in section ? section.content : {},
//           lesson: {
//             connect: {
//               id: createdLesson.id,
//             },
//           },
//         },
//       });

//       const sectionWithTables = section as SectionWithTables;
//       if (sectionWithTables.tableEntries?.create) {
//         for (const table of sectionWithTables.tableEntries.create) {
//           await prisma.tableEntry.create({
//             data: {
//               title: table.title,
//               rows: table.rows,
//               section: {
//                 connect: {
//                   id: createdSection.id,
//                 },
//               },
//             },
//           });
//         }
//       }

//     console.log(`Добавлен: ${lesson.slug}`);
//   }
// }

// main()
//   .catch((err) => {
//     console.error("Ошибка при сидинге:", err);
//   })
//   .finally(() => prisma.$disconnect());
