import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedSections(
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const section of lesson.sections ?? []) {
    const title = section.title;
    const sectionTitle = Array.isArray(title)
      ? title.join(", ")
      : (title ?? {});
    const type = section.type;
    const slug = section.slug;
    const anchor = section.anchor;
    const subtitle = section.subtitle;
    const tableEntries = section.tableEntries;

    const existingSection = await prisma.section.findFirst({
      where: {
        title: { equals: sectionTitle },
        type,
        lessonId,
      },
    });

    if (existingSection) {
      const updates: Record<string, unknown> = {};
      const updatedFields: string[] = [];

      if (anchor !== undefined && existingSection.anchor !== anchor) {
        updates.anchor = anchor;
        updatedFields.push(`anchor: "${anchor}"`);
      }
      if (slug !== undefined && existingSection.slug !== slug) {
        updates.slug = slug;
        updatedFields.push(`slug: "${slug}"`);
      }
      if (subtitle && Object.keys(subtitle).length > 0) {
        const existingSubtitle = existingSection.subtitle as Record<
          string,
          unknown
        > | null;
        if (
          !existingSubtitle ||
          JSON.stringify(existingSubtitle) !== JSON.stringify(subtitle)
        ) {
          updates.subtitle = subtitle;
          updatedFields.push("subtitle");
        }
      }
      if (
        "content" in section &&
        section.content &&
        Object.keys(section.content).length > 0
      ) {
        const existingContent = existingSection.content as Record<
          string,
          unknown
        > | null;
        if (
          !existingContent ||
          JSON.stringify(existingContent) !== JSON.stringify(section.content)
        ) {
          updates.content = section.content;
          updatedFields.push("content");
        }
      }

      if (Object.keys(updates).length > 0) {
        await prisma.section.update({
          where: { id: existingSection.id },
          data: updates,
        });
        console.log(
          `♻️ Section "${sectionTitle}" обновлена. ${updatedFields.join(", ")}`,
        );
      } else {
        console.log(
          `ℹ️ Section "${sectionTitle}" уже существует, изменений нет.`,
        );
      }
      continue;
    }

    const createdSection = existingSection
      ? existingSection
      : await prisma.section.create({
          data: {
            type,
            slug,
            anchor,
            title: sectionTitle,
            ...("subtitle" in section &&
            subtitle &&
            Object.keys(subtitle).length > 0
              ? { subtitle }
              : {}),

            ...("content" in section &&
            section.content &&
            Object.keys(section.content).length > 0
              ? { content: section.content }
              : {}),
            lessonId,
          },
        });

    console.log(`✅ Section "${sectionTitle}" создан.`);

    // if (existingSection) {
    //   console.log(`ℹ️ Section "${sectionTitle}" уже существует, пропущен.`);
    //   continue;
    // } else {
    //   console.log(`✅ Section "${sectionTitle}" создан.`);
    // }

    // ✅ Table entries
    if (
      tableEntries &&
      typeof tableEntries === "object" &&
      Array.isArray(tableEntries.create)
    ) {
      for (const entry of tableEntries.create) {
        const exists = await prisma.tableEntry.findFirst({
          where: {
            sectionId: createdSection.id,
            title: entry.title,
            rows: { equals: entry.rows },
          },
        });

        if (exists) continue;

        await prisma.tableEntry.create({
          data: {
            ...entry,
            sectionId: createdSection.id,
          },
        });

        console.log(`✅ TableEntry добавлен.`);
      }
    }
  }
}
