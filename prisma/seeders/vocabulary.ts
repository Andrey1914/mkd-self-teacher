import { Prisma, PrismaClient } from "@prisma/client";
import type { LessonData } from "@/types";
type DbClient = PrismaClient | Prisma.TransactionClient;

export async function seedVocabulary(
  // tx: PrismaClient,
  prisma: DbClient,
  lesson: LessonData,
  lessonId: string,
) {
  let vocabularyIndex = 1;

  for (const vocab of lesson.vocabulary ?? []) {
    let title: string | { ru?: string; mkd?: string };
    let displayTitle: string;

    if (!vocab.title) {
      title = `vocabulary-${vocabularyIndex}`;
      displayTitle = title;
    } else if (typeof vocab.title === "string") {
      title = vocab.title;
      displayTitle = vocab.title;
    } else if (typeof vocab.title === "object" && vocab.title !== null) {
      title = vocab.title as { ru?: string; mkd?: string };
      displayTitle = title.ru || title.mkd || `vocabulary-${vocabularyIndex}`;
    } else {
      title = `vocabulary-${vocabularyIndex}`;
      displayTitle = title;
    }

    const slug = vocab.slug || `vocabulary-${vocabularyIndex}`;
    const uniqueSlug = `${slug}-${vocabularyIndex}`;

    const existing = await prisma.vocabularyEntry.findFirst({
      where: {
        slug: uniqueSlug,
        lessonId,
      },
    });

    const newContent = JSON.parse(JSON.stringify(vocab.sections));

    if (existing) {
      const existingContentStr = JSON.stringify(existing.content);
      const newContentStr = JSON.stringify(newContent);
      const titleChanged =
        JSON.stringify(existing.title) !== JSON.stringify(title);
      const contentChanged = existingContentStr !== newContentStr;

      if (titleChanged || contentChanged) {
        const changes: string[] = [];
        const updatedWords: string[] = [];

        if (titleChanged) {
          changes.push("заголовок");
        }

        if (contentChanged) {
          type WordType = { mkd?: string; ru?: string; pron?: string };

          const existingWords: WordType[] = [];
          try {
            const existingContent = existing.content;
            if (Array.isArray(existingContent)) {
              existingContent.forEach((section) => {
                if (
                  section &&
                  typeof section === "object" &&
                  "content" in section
                ) {
                  const content = section.content;
                  if (
                    content &&
                    typeof content === "object" &&
                    "words" in content
                  ) {
                    const words = content.words;
                    if (Array.isArray(words)) {
                      words.forEach((word) => {
                        if (word && typeof word === "object") {
                          existingWords.push(word as WordType);
                        }
                      });
                    }
                  }
                }
              });
            }
          } catch (error) {
            console.log("❌ Ошибка при извлечении существующих слов:", error);
            throw error;
          }

          const newWords: WordType[] = [];
          vocab.sections?.forEach((section) => {
            section.content?.words?.forEach((word) => {
              newWords.push(word);
            });
          });

          newWords.forEach((newWord) => {
            if (!newWord.mkd) return;

            const oldWord = existingWords.find((w) => w.mkd === newWord.mkd);
            if (oldWord) {
              if (oldWord.ru !== newWord.ru || oldWord.pron !== newWord.pron) {
                updatedWords.push(newWord.mkd);
              }
            } else {
              updatedWords.push(`+${newWord.mkd}`);
            }
          });

          existingWords.forEach((oldWord) => {
            if (!oldWord.mkd) return;

            const stillExists = newWords.some((w) => w.mkd === oldWord.mkd);
            if (!stillExists) {
              updatedWords.push(`-${oldWord.mkd}`);
            }
          });

          if (updatedWords.length > 0) {
            changes.push(`♻️ Обновлены слова: ${updatedWords.join(", ")}`);
          } else {
            changes.push("структура словаря");
          }
        }

        await prisma.vocabularyEntry.update({
          where: { id: existing.id },
          data: {
            title,
            content: newContent,
          },
        });

        const wordsCount =
          vocab.sections?.reduce((total, section) => {
            return total + (section.content?.words?.length ?? 0);
          }, 0) ?? 0;

        console.log(
          `♻️ Обновлен Vocabulary "${displayTitle}": ${changes.join(
            ", ",
          )} (🔡 всего ${wordsCount} слов)`,
        );
      } else {
        console.log(`ℹ️ Vocabulary "${displayTitle}" не изменился, пропущен.`);
      }
      vocabularyIndex++;
      continue;
    }

    await prisma.vocabularyEntry.create({
      data: {
        title,
        slug: uniqueSlug,
        content: newContent,
        lessonId,
      },
    });

    const wordsCount =
      vocab.sections?.reduce((total, section) => {
        return total + (section.content?.words?.length ?? 0);
      }, 0) ?? 0;

    console.log(
      `✅ Добавлен Vocabulary "${displayTitle}" с ${wordsCount} словами`,
    );
    vocabularyIndex++;
  }
}
