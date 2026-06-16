import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData, TablesProps } from "@/types";

type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedGlossary(
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  const currentSlug = lesson.slug ?? "";

  const tables = (lesson.tables ?? []) as TablesProps[];

  for (const tableBlock of tables) {
    if (tableBlock.glossary !== true) {
      continue;
    }

    const slug = tableBlock.slug ?? currentSlug;
    const tableType = tableBlock.type;

    const exists = await prisma.glossaryEntry.findFirst({
      where: {
        slug: slug,
        type: tableType,
        lessonId,
      },
    });

    const content = tableBlock?.content;
    const title = tableBlock.title;

    if (exists) {
      const titleChanged =
        JSON.stringify(exists.title) !== JSON.stringify(title);

      const contentChanged =
        JSON.stringify(exists.content) !== JSON.stringify(content);

      if (titleChanged || contentChanged) {
        await prisma.glossaryEntry.update({
          where: { id: exists.id },
          data: {
            title: (title as Prisma.InputJsonValue) ?? null,
            content: (content as Prisma.InputJsonValue) ?? null,
            anchor: tableBlock.anchor ?? null,
          },
        });
        console.log(
          `♻️ GlossaryEntry "${tableType}" в уроке "${slug}" обновлен.`,
        );
      } else {
        console.log(
          `ℹ️ GlossaryEntry "${tableType}" в уроке "${slug}" без изменений.`,
        );
      }
      continue;
    }

    try {
      await prisma.glossaryEntry.create({
        data: {
          slug,
          type: tableType,
          glossary: true,
          anchor: tableBlock.anchor ?? null,
          title: (title as Prisma.InputJsonValue) ?? null,
          content: (content as Prisma.InputJsonValue) ?? null,
          lessonId: lessonId,
        },
      });
      console.log(
        `✅ Лексическая схема "${tableType}" успешно записана в GlossaryEntry.`,
      );
    } catch (error) {
      console.error(`❌ Ошибка сохранения глоссария "${tableType}":`, error);
      throw error;
    }
  }
}
