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
    try {
      await prisma.$transaction(
        async (tx) => {
          const existing = await tx.lesson.findUnique({
            where: { slug: lesson.slug },
          });

          const createdOrExistingLesson = existing
            ? await tx.lesson.update({
                where: { slug: lesson.slug },
                data: {
                  title: lesson.title ?? {},
                  numericId: lesson.numericId,
                },
              })
            : await tx.lesson.create({
                data: {
                  title: lesson.title ?? {},
                  slug: lesson.slug,
                  numericId: lesson.numericId,
                },
              });

          const lessonId = createdOrExistingLesson.id;

          console.log(
            existing
              ? `ℹ️ Урок "${lesson.slug}" уже существует. Данные будут дополнены.`
              : `✅ Урок "${lesson.slug}" создан.`,
          );

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
