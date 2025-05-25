import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the macedonian self-teacher!!
        </h1>

        <div className={styles.ctas}>
          <p className={styles.description}>
            This is a simple app to help you learn the Macedonian language.
          </p>
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
