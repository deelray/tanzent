'use client'
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "./page.module.css";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function Home() {
    const moonAnimation = useAnimation();
    const moonSmallAnimation = useAnimation();

    const handleMouseMove = e => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        const offsetFactor = 15;
        const offsetFactorBackground = -15;
        moonAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
        });
        moonSmallAnimation.start({
            x: moveX / offsetFactorBackground,
            y: moveY / offsetFactorBackground
        });
    }

  return (
    <main className={styles.main} onMouseMove={e => handleMouseMove(e)}>
        <motion.div
        initial={{ x: -400, opacity: 0, scale: 0}}
        animate={{ x: 0, opacity: 0.3, scale: 1, rotate: 360}}
        transition={{
            ease: 'easeInOut',
            duration: 1,
        }}
        className={styles.moon}
        >
            <motion.img
                src="/assets/moon.png"
                alt="Moon"
                width={140}
                height={140}
                animate={moonAnimation}
                transition={{
                    ease: 'easeInOut',
                    duration: 1
                }}
            />
        </motion.div>

      <motion.div
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{
              delay: 0.5,
              ease: 'easeInOut',
              duration: 0.5
          }}
          className={styles.center}
      >
        <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="Tanzent Logo"
            width={73}
            height={70}
        />
      </motion.div>

      <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
              delay: 1,
              ease: 'easeInOut',
              duration: 0.5
          }}
          viewport={{ amount: 0 }}
          className={styles.title}
      >
          Under construction
      </motion.h1>

      <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
              delay: 1.5,
              ease: 'easeInOut',
              duration: 0.5
          }}
          viewport={{ amount: 0 }}
          className={styles.text}
      >
          The web experience is currently under construction.
      </motion.p>

      <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
              delay: 2,
              ease: 'easeInOut',
              duration: 0.5
          }}
          viewport={{ amount: 0 }}
          className={styles.mail}
      >
          tanzent.com@gmail.com
      </motion.p>

      <motion.div
          initial={{ y: 100, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{
              delay: 2.5,
              ease: 'easeInOut',
              duration: 0.5
          }}
          className={styles.block}
      >
        <a
            href="https://t.me/tanzent_chat"
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
            href="https://twitter.com/Tanzent_capital"
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
            href="https://t.me/tanzent_capital"
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
      </motion.div>

        <motion.div
            initial={{ x: 400, opacity: 0, scale: 0}}
            animate={{ x: 0, opacity: 0.1, scale: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 1,
            }}
            className={styles.moon__small}
        >
            <motion.img
                src="/assets/moon.png"
                alt="Moon_small"
                width={60}
                height={60}
                animate={moonSmallAnimation}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                }}
            />
        </motion.div>

        <motion.div
            initial={{ x: -400, rotate: -30, opacity: 0}}
            animate={{ x: 0, rotate: 0, opacity: 0.4}}
            transition={{
                ease: 'easeInOut',
                duration: 4,
            }}
            className={styles.background}
        >
            <Image
                src="/assets/background.png"
                alt="background"
                width={1515}
                height={624}
                className={styles.background__image}
            />
        </motion.div>
    </main>
  );
}
