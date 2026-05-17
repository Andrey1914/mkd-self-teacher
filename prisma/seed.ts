import { PrismaClient } from "@prisma/client";
import { lessons } from "@/prisma/lessons";
import type { LessonData } from "@/types";
import {
  seedSections,
  seedExercises,
  seedGlossary,
  seedDialogues,
  seedParagraphs,
  seedPayAttention,
  seedTables,
  seedVocabulary,
} from "./seeders";

const prisma = new PrismaClient();

async function main() {
  console.log("Запуск сидинга...");

  for (const lesson of lessons as LessonData[]) {
    const slug = lesson.slug;
    const title = lesson.title;
    const numericId = lesson.numericId;
    const anchor = lesson.anchor;
    try {
      await prisma.$transaction(
        async (tx) => {
          const existing = await tx.lesson.findUnique({
            where: { slug },
          });

          const createdOrExistingLesson = existing
            ? await tx.lesson.update({
                where: { slug },
                data: {
                  title: title ?? {},
                  numericId,
                  ...(anchor !== undefined ? { anchor } : {}),
                },
              })
            : await tx.lesson.create({
                data: {
                  title: title ?? {},
                  slug,
                  numericId,
                  anchor,
                },
              });

          const lessonId = createdOrExistingLesson.id;

          if (existing) {
            const updatedFields: string[] = [];
            if (anchor !== undefined && existing.anchor !== anchor) {
              updatedFields.push(`anchor: "${anchor}"`);
            }
            console.log(
              updatedFields.length > 0
                ? `♻️ Урок "${slug}" обновлён. ${updatedFields.join(", ")}`
                : `ℹ️ Урок "${slug}" уже существует. Изменений нет.`,
            );
          } else {
            console.log(`✅ Урок "${slug}" создан.`);
          }

          // console.log(
          //   existing
          //     ? `ℹ️ Урок "${lesson.slug}" уже существует. Данные будут дополнены.`
          //     : `✅ Урок "${lesson.slug}" создан.`,
          // );

          // Sections и таблицы
          await seedSections(tx, lesson, lessonId);

          // Exercises
          await seedExercises(tx, lesson, lessonId);

          // Glossary entries
          await seedGlossary(tx, lesson, lessonId);

          // Dialogue blocks
          await seedDialogues(tx, lesson, lessonId);

          // Paragraph blocks
          await seedParagraphs(tx, lesson, lessonId);

          // Pay attention blocks
          await seedPayAttention(tx, lesson, lessonId);

          // Table blocks
          await seedTables(tx, lesson, lessonId);

          // Vocabulary
          await seedVocabulary(tx, lesson, lessonId);

          console.log(`🎉 Данные для урока "${lesson.slug}" обработаны.\n`);
        },
        {
          maxWait: 10000,
          timeout: 20000,
        },
      );
    } catch (error) {
      console.error(
        `\n--- ❌ ОШИБКА при сидинге урока "${lesson.slug}". Транзакция отменена. ---\n`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }
}

main()
  .catch((error) => {
    console.error("Критическая ошибка во время выполнения сидинга:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Соединение с базой данных закрыто.");
  });
