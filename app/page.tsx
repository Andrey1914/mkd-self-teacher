import styles from "./page.module.css";
import { Lesson1 } from "@/components/Lesson1";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the macedonian self-teacher!!
        </h1>

        <div>
          <Lesson1 />
        </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          copight &copy; 2023 Macedonian Self-Teacher
        </p>
      </footer>
    </div>
  );
}
