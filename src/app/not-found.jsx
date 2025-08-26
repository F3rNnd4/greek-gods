import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
      <h1 className={styles.title}>404 - Página não encontrada</h1>
      <p className={styles.text}>A página que você procura não existe.</p>
      <Image
        className={styles.emoji}
        src="/images/sad-statue.png"
        alt="Emoji triste"
        width={180}
        height={180}
        priority
      />

      <div className={styles.linkContainer}>
        <Link className={styles.link} href="/">
          Voltar para Home
        </Link>
      </div>
    </div>
    </div>
  );
}
