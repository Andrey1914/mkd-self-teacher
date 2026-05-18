import Link from "next/link";
import { lessonsData } from "@/data";

import { styles } from "./styles";

export const HomePage = () => {
  const { titleContainer, subtitleContainer, contentContainer } =
    styles.containers;
  const { title, subtitle } = styles.headers;

  const { list, item } = styles.links;

  return (
    <div>
      <div className={titleContainer}>
        <h1 className={title}>Македонский ЯЗЫК</h1>
      </div>
      <div className={subtitleContainer}>
        <h2 className={subtitle}>Самоучитель</h2>
      </div>
      <div className={contentContainer}>
        <Link href="/contents" style={{ textDecoration: "underline" }}>
          <h3 style={{ padding: "30px 30px 30px 0", textIndent: 0 }}>
            Содержание
          </h3>
        </Link>

        <ul className={list}>
          {lessonsData.map((lesson) => (
            <li key={lesson.id} className={item}>
              <Link href={`/lesson/${lesson.id}`}>{lesson.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
