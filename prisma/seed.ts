import { prisma } from "../lib/prisma";
import { lessons } from "@/prisma/lessons";

async function main() {
  for (const lesson of lessons) {
    const existing = await prisma.lesson.findUnique({
      where: { slug: lesson.slug },
    });

    if (existing) {
      console.log(`Пропущен: ${lesson.slug}`);
      continue;
    }

    const createdLesson = await prisma.lesson.create({
      data: {
        title: lesson.title.join(", "),
        slug: lesson.slug,
      },
    });

    for (const section of lesson.sections) {
      console.log(
        "👉 Контент секции:",
        JSON.stringify(section.content, null, 2)
      );
      const createdSection = await prisma.section.create({
        data: {
          type: section.type,
          title: section.title?.join(", "),
          content: section.content,
          lessonId: createdLesson.id,
        },
      });

      if ("tableEntries" in section && section.tableEntries?.create) {
        for (const table of section.tableEntries.create) {
          await prisma.tableEntry.create({
            data: {
              title: table.title,
              rows: table.rows,
              sectionId: createdSection.id,
            },
          });
        }
      }
    }

    console.log(`Добавлен: ${lesson.slug}`);
  }
}

main()
  .catch((err) => {
    console.error("Ошибка при сидинге:", err);
  })
  .finally(() => prisma.$disconnect());
