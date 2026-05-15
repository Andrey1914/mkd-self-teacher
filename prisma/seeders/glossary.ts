import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedGlossary(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const entry of lesson.glossary ?? []) {
    const exists = await prisma.glossaryEntry.findFirst({
      where: { word: entry.word, lessonId },
    });
    if (exists) {
      console.log(`ℹ️ GlossaryEntry "${entry.word}" уже существует, пропущен.`);
      continue;
    }

    try {
      await prisma.glossaryEntry.create({ data: { ...entry, lessonId } });

      console.log(`✅ GlossaryEntry "${entry.word}" добавлен.`);
    } catch (error) {
      console.error(
        `❌ Ошибка при добавлении GlossaryEntry "${entry.word}":`,
        error,
      );
      throw error;
    }
  }
}
