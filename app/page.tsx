import styles from "./page.module.css";
import { Lesson1 } from "@/components/Lessons/Lesson1";

export default function Home() {
  return (
    <>
      {/* <div className={styles.page}> */}
      <main className={styles.main}>
        {/* <main className={styles.main}> */}
        <Lesson1 />
        {/* </main> */}
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>...to be continued...</p>
      </footer>
      {/* </div> */}
    </>
  );
}
