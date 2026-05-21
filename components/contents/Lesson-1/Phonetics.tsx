import Link from "next/link";
import { lectureLesson1 } from "@/prisma/lessons/paragraph";

export const Lesson1Phonetics = () => {
  const partPhonetics = lectureLesson1.phonetics;
  const phonetics = partPhonetics?.title as
    | { ru: string; mkd: string }
    | undefined;

  const partAlphabet = lectureLesson1.phonetics;
  const alphabet = partAlphabet?.content?.intro?.subtitle as
    | { ru: string; mkd: string }
    | undefined;

  const partFeatures = lectureLesson1.features;
  const features = partFeatures?.subtitle as string;

  const partAccent = lectureLesson1.accent;
  const accent = partAccent?.subtitle as string;

  const partExeptions = lectureLesson1.exceptions;
  const exeptions = partExeptions?.subtitle as string;

  const partSpelling = lectureLesson1.spelling;
  const spelling = partSpelling?.subtitle as string;

  return (
    <>
      <Link
        href="/lesson/1#lesson-1_phonetics"
        style={{ display: "flex", gap: "8px", alignItems: "baseline" }}
      >
        <h3 style={{ display: "flex", gap: "8px", textIndent: 0 }}>
          {phonetics?.ru}
          <span>{phonetics?.mkd}</span>
        </h3>
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link
            href="/lesson/1#lesson-1_phonetics"
            style={{ display: "flex", gap: "8px" }}
          >
            <p>{alphabet?.ru}</p>
            <p style={{ textIndent: 0 }}>{alphabet?.mkd}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#lesson-1_features">
            <p>{features}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#lesson-1_accent">
            <p>{accent}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#lesson-1_exeptions">
            <p>{exeptions}</p>
          </Link>
        </li>
        <li>
          <Link href="/lesson/1#lesson-1_spelling">
            <p>{spelling}</p>
          </Link>
        </li>
      </ul>
    </>
  );
};
