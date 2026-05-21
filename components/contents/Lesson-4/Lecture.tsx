import Link from "next/link";
import { formatText } from "@/utils";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-4";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-4";
import { lesson4 } from "@/prisma/lessons/lesson-4";

export const Lecture = () => {
  const section = lesson4.sections?.[0];

  const sectionSubtitle = section?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const sectionDialogue = dialogueBlock.sections?.[0];

  const dialogue = sectionDialogue?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const vocabularyTitle = vocabulary.title as { ru: string; mkd: string };

  return (
    <>
      <Link
        href="/lesson/4#lesson-4_exploring-the-city"
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
        scroll={false}
      >
        <h3 style={{ display: "flex", gap: 8, textIndent: 0 }}>
          {sectionSubtitle?.ru}
          <span>{sectionSubtitle?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link
            href="/lesson/4#dialogue-4"
            style={{ display: "flex", gap: 8, alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/4#vocabulary-4">
            <p>{vocabularyTitle?.ru}</p>
            <span style={{ paddingLeft: 20 }}>
              {formatText(vocabularyTitle?.mkd)}
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};
