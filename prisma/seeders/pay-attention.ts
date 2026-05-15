import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
import { exercisesUtils } from "@/utils";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedPayAttention(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  const { isDeepEqual } = exercisesUtils;

  for (const block of lesson.payAttention ?? []) {
    const section = block.sections?.[0];

    const slug = section?.slug ?? "";
    const type = section?.type ?? "";
    const rawTitle = section?.title;

    const contentText = block.sections?.[0]?.content?.text ?? "";
    const contentWords = section?.content?.words;

    if (!slug || !type) {
      console.error(
        `❌ Пропущен PayAttentionBlock — нет slug или type в ${JSON.stringify(
          block,
        )}`,
      );
      continue;
    }

    const title: string = rawTitle || type || "Без названия";

    const contentObject = {
      text: contentText,
      ...(contentWords && { words: contentWords }),
    };

    const exists = await prisma.payAttentionBlock.findFirst({
      where: { type, lessonId },
      select: { id: true, content: true, slug: true, type: true },
    });

    if (exists) {
      const isSame = isDeepEqual(exists.content, contentObject);
      if (!isSame) {
        await prisma.payAttentionBlock.update({
          where: { id: exists.id },
          data: {
            title,
            slug,
            content: contentObject,
          },
        });

        console.log(`♻️ Обновлён PayAttentionBlock "${type}"`);
      } else {
        console.log(`ℹ️ PayAttentionBlock "${type}" без изменений, пропущен.`);
      }
      continue;
    }

    try {
      await prisma.payAttentionBlock.create({
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
        error,
      );
      throw error;
    }
  }
}
