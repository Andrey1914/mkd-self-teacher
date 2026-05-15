import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedTables(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const tableBlock of lesson.tables ?? []) {
    const rawTitle = "title" in tableBlock ? tableBlock.title : undefined;

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
        `❌ Пропущен tableBlock без content. title: ${displayTitle}`,
      );
      continue;
    }

    const slug = tableBlock.slug;

    const subtitleValue = tableBlock.subtitle
      ? Array.isArray(tableBlock.subtitle)
        ? tableBlock.subtitle.join(", ")
        : tableBlock.subtitle
      : null;

    const exists = await prisma.tableBlock.findFirst({
      where: {
        category: tableBlock.type,
        slug: slug,
        lessonId,
      },
    });

    const jsonData = JSON.parse(
      JSON.stringify({
        content: content,
      }),
    );

    if (exists) {
      const titleChanged =
        JSON.stringify(exists.title) !== JSON.stringify(title);

      const subtitleChanged = exists.subtitle !== subtitleValue;

      const dataChanged =
        JSON.stringify(exists.data) !== JSON.stringify(jsonData);

      if (titleChanged || subtitleChanged || dataChanged) {
        await prisma.tableBlock.update({
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

    await prisma.tableBlock.create({
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
}
