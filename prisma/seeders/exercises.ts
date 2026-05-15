import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
import { exercisesUtils } from "@/utils";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedExercises(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  const { isDeepEqual } = exercisesUtils;
  let skippedCount = 0;

  for (const exercise of lesson.exercises ?? []) {
    const existingExercise = await prisma.exercise.findFirst({
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
        answerSet: section?.answerSet,
        content: section?.content ?? {},
      };

      const existingDataForCompare = {
        type: existingExercise.type,
        slug: existingExercise.slug,
        title: existingExercise.title,
        prompt: existingExercise.prompt,
        answerSet: existingExercise.answerSet ?? undefined,
        content: existingExercise.content,
      };

      const isSame = isDeepEqual(existingDataForCompare, newData);

      if (isSame) {
        skippedCount++;
      } else {
        try {
          await prisma.exercise.update({
            where: { id: existingExercise.id },
            data: {
              type: newData.type,
              slug: newData.slug,
              title: newData.title,
              prompt: newData.prompt,
              content: newData.content,
              ...(newData.answerSet !== undefined
                ? { answerSet: newData.answerSet }
                : {}),
            },
          });
          console.log(`♻️ Exercise "${exercise.title}" обновлён.`);
        } catch (error) {
          console.error(
            `❌ Ошибка при обновлении упражнения "${exercise.title}":`,
            error,
          );
          throw error;
        }
      }
      continue;
    }

    if (!exercise.sections?.[0]) {
      console.warn(
        `⚠️ "${exercise.title}" → sections =`,
        JSON.stringify(exercise.sections),
      );
      continue;
    }

    const section = exercise.sections?.[0];

    if (!section) {
      console.warn(
        `⚠️ Упражнение "${exercise.title}" пропущено — section[0] невалидный.`,
        JSON.stringify(exercise.sections),
      );
      continue;
    }

    if (!Array.isArray(section.prompt)) {
      console.warn(
        `⚠️ Упражнение "${exercise.title}" пропущено — prompt не массив строк.`,
      );
      continue;
    }

    try {
      await prisma.exercise.create({
        data: {
          type: exercise.type ?? "default_type",
          slug: exercise.slug ?? "default_slug",
          title: exercise.title ?? "Без названия.",
          prompt: section.prompt,
          ...(section.answerSet !== undefined
            ? { answerSet: section.answerSet }
            : {}),

          content: section.content ?? {},
          lessonId,
        },
      });

      console.log(`✅ Exercise "${exercise.title}" добавлен.`);
    } catch (error) {
      console.error(
        `❌ Ошибка при добавлении упражнения "${exercise.title}":`,
        error,
      );
      throw error;
    }
  }

  if (skippedCount > 0) {
    console.log(`ℹ️ Пропущено ${skippedCount} уже существующих упражнений.`);
  }
}
