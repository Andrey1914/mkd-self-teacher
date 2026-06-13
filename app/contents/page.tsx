import Link from "next/link";
import { ContentsGenerator } from "@/components/contents/generator/ContentsGenerator";
import { lessonConfig } from "@/components/contents/config";
import styles from "./page.module.css";

export default function ContentsPage() {
  const { columnContainer, column } = styles;

  return (
    <div className={columnContainer}>
      <div className={column}>
        <h1 style={{ textIndent: 0 }}>Содержание</h1>
        <Link href="/" style={{ textDecoration: "underline" }}>
          <p style={{ textIndent: 0 }}>ГЛАВНАЯ</p>
        </Link>

        <ContentsGenerator config={lessonConfig} splitAt={10} />

        <p style={{ color: "#9d9d9d", paddingTop: 15 }}>
          Работа над этой страницей продолжается...
        </p>
      </div>
      <div className={column}></div>
    </div>
  );
}
