import { prisma } from "../lib/prisma";
import { lessons } from "@/prisma/lessons";
import { SectionWithTables } from "@/types";

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
      const createdSection = await prisma.section.create({
        data: {
          type: section.type,
          title: section.title?.join(", "),
          content: "content" in section ? section.content : undefined,
          lesson: {
            connect: {
              id: createdLesson.id,
            },
          },
        },
      });

      const sectionWithTables = section as SectionWithTables;
      if (sectionWithTables.tableEntries?.create) {
        for (const table of sectionWithTables.tableEntries.create) {
          await prisma.tableEntry.create({
            data: {
              title: table.title,
              rows: table.rows,
              section: {
                connect: {
                  id: createdSection.id,
                },
              },
            },
          });
        }
      }
    }

    // for (const section of lesson.sections) {
    //   const createdSection = await prisma.section.create({
    //     data: {
    //       type: section.type,
    //       title: section.title?.join(", ") || null,
    //       content: "content" in section ? section.content : null,
    //       lessonId: createdLesson.id,
    //     },
    //   });

    //   const sectionWithTables = section as SectionWithTables;
    //   if (sectionWithTables.tableEntries?.create) {
    //     for (const table of sectionWithTables.tableEntries.create) {
    //       await prisma.tableEntry.create({
    //         data: {
    //           title: table.title,
    //           rows: table.rows,
    //           sectionId: createdSection.id,
    //         },
    //       });
    //     }
    //   }
    // }

    // for (const section of lesson.sections) {
    //   const createdSection = await prisma.section.create({
    //     data: {
    //       type: section.type,
    //       title: section.title?.join(", "),
    //       content: "content" in section ? section.content : null,
    //       lessonId: createdLesson.id,
    //     },
    //   });

    //   const sectionWithTables = section as SectionWithTables;

    //   if (sectionWithTables.tableEntries?.create) {
    //     for (const table of sectionWithTables.tableEntries.create) {
    //       await prisma.tableEntry.create({
    //         data: {
    //           title: table.title,
    //           rows: table.rows,
    //           sectionId: createdSection.id,
    //         },
    //       });
    //     }
    //   }
    // }

    console.log(`Добавлен: ${lesson.slug}`);
  }
}

main()
  .catch((err) => {
    console.error("Ошибка при сидинге:", err);
  })
  .finally(() => prisma.$disconnect());
