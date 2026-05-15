import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedDialogues(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const dialogue of lesson.dialogues ?? []) {
    try {
      const existing = await prisma.dialogueBlock.findFirst({
        where: { lessonId },
      });

      if (existing) {
        if (JSON.stringify(existing.content) !== JSON.stringify(dialogue)) {
          await prisma.dialogueBlock.update({
            where: { id: existing.id },
            data: { content: dialogue },
          });
          console.log(`♻️ DialogueBlock "${dialogue}" обновлён.`);
        } else {
          console.log(
            `ℹ️ DialogueBlock "${dialogue}" уже существует, пропущен.`,
          );
        }
      } else {
        await prisma.dialogueBlock.create({
          data: { content: dialogue, lessonId },
        });
        console.log(`✅ DialogueBlock "${dialogue}" добавлен.`);
      }
    } catch (error) {
      console.error(
        `❌ Ошибка при обработке DialogueBlock "${dialogue}":`,
        error,
      );
      throw error;
    }
  }
}
