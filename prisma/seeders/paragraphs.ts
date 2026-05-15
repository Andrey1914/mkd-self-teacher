import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedParagraphs(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const paragraph of lesson.paragraph ?? []) {
    const slug = paragraph.slug;
    const subtitle = Array.isArray(paragraph.subtitle)
      ? paragraph.subtitle.join(", ")
      : paragraph.subtitle;

    const intro = paragraph.intro;
    const content = paragraph.content ?? {};

    const existing = await prisma.paragraphBlock.findFirst({
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
          `ℹ️ ParagraphBlock "${paragraph.type}" не изменился, пропущен.`,
        );
        continue;
      }

      await prisma.paragraphBlock.update({
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
      await prisma.paragraphBlock.create({
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
        `✅ Добавлен ParagraphBlock "${paragraph.type}", subtitle: "${subtitle}".`,
      );
    }
  }
}
