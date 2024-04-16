import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="Tanzent Logo"
            width={73}
            height={70}
        />
      </div>

      <h1 className={styles.title}>Under construction</h1>

      <p className={styles.text}>The web experience is currently under construction.</p>
      <p className={styles.mail}>tanzent.com@gmail.com</p>

      <div className={styles.block}>
        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              src="/assets/discord.svg"
              alt="Discord Icon"
              width={20}
              height={20}
          />
        </a>

        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              src="/assets/twitter.svg"
              alt="Twitter Icon"
              width={20}
              height={20}
          />
        </a>

        <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              src="/assets/telegram.svg"
              alt="Telegram Icon"
              width={20}
              height={20}
          />
        </a>
      </div>
    </main>
  );
}
