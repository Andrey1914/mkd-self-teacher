import Link from "next/link";
import { ContentsLesson1 } from "@/components/contents";

export default function ContentsPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ textIndent: 0 }}>Содержание</h1>
      <Link href="/" style={{ textDecoration: "underline" }}>
        <p style={{ textIndent: 0 }}>ГЛАВНАЯ</p>
      </Link>

      <ContentsLesson1 />
    </div>
  );
}
