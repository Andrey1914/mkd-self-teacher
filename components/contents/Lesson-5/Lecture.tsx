import Link from "next/link";
import { formatText } from "@/utils";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-5";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";
import { lesson5 } from "@/prisma/lessons/lesson-5";
import { glossary } from "@/prisma/lessons/tables";

export const Lecture = () => {
  const section = lesson5.sections?.[0];

  const sectionSubtitle = section?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const sectionDialogue = dialogueBlock.sections?.[0];

  const dialogue = sectionDialogue?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const vocabularyTitle = vocabulary.title as { ru: string; mkd: string };
  const occupation = glossary.occupationTable.title as {
    ru: string;
    mkd: string;
  };

  return (
    <>
      <Link
        href="/lesson/5#lesson-5_restaurant"
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
            href="/lesson/5#dialogue-5"
            style={{ display: "flex", gap: 8, alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/5#vocabulary-5">
            <p>{vocabularyTitle?.ru}</p>
            <span style={{ paddingLeft: 20 }}>
              {formatText(vocabularyTitle?.mkd)}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/5#occupation-5">
            <p>{occupation?.ru}</p>
            <span style={{ paddingLeft: 20 }}>{occupation?.mkd}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
