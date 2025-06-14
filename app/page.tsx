import styles from "./page.module.css";
import { Lesson1 } from "@/components/Lessons/Lesson1";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Lesson1 />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Copyright &copy; 2023 Macedonian Self-Teacher
        </p>
      </footer>
    </div>
  );
}
