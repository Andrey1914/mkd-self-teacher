import Link from "next/link";
import {
  ContentsLesson1,
  ContentsLesson2,
  ContentsLesson3,
} from "@/components/contents";
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

        <ContentsLesson1 />
        <ContentsLesson2 />
        <ContentsLesson3 />
      </div>
      <div className={column}>{/* <ContentsLesson1 /> */}</div>
    </div>
  );
}
