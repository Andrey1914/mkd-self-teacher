import Link from "next/link";
import { formatText } from "@/utils";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-6";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";
import { lesson6 } from "@/prisma/lessons/lesson-6";

export const Lecture = () => {
  const section = lesson6.sections?.[0];

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
        href="/lesson/6#lesson-6_car-rental"
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
            href="/lesson/6#dialogue-6"
            style={{ display: "flex", gap: 8, alignItems: "baseline" }}
          >
            <p>{dialogue?.ru}</p>
            <span>{dialogue?.mkd}</span>
          </Link>
        </li>
        <li>
          <Link href="/lesson/6#vocabulary-6">
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
