import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedSections(
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  for (const section of lesson.sections ?? []) {
    const sectionTitle = Array.isArray(section.title)
      ? section.title.join(", ")
      : (section.title ?? {});

    // const existingSection = await tx.section.findFirst({
    const existingSection = await prisma.section.findFirst({
      where: {
        title: { equals: sectionTitle },
        type: section.type,
        lessonId,
      },
    });

    const createdSection = existingSection
      ? existingSection
      : await prisma.section.create({
          data: {
            type: section.type,
            slug: section.slug,
            title: sectionTitle,
            ...("subtitle" in section &&
            section.subtitle &&
            Object.keys(section.subtitle).length > 0
              ? { subtitle: section.subtitle }
              : {}),

            ...("content" in section &&
            section.content &&
            Object.keys(section.content).length > 0
              ? { content: section.content }
              : {}),
            lessonId,
          },
        });

    if (existingSection) {
      console.log(`ℹ️ Section "${sectionTitle}" уже существует, пропущен.`);
      continue;
    } else {
      console.log(`✅ Section "${sectionTitle}" создан.`);
    }

    // ✅ Table entries
    if (
      section.tableEntries &&
      typeof section.tableEntries === "object" &&
      Array.isArray(section.tableEntries.create)
    ) {
      for (const entry of section.tableEntries.create) {
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
