import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children, title = "No Title" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.header_item}>home</a>
        </Link>
        <Link href="/blog-page">
          <a className={styles.header_item}>blog</a>
        </Link>
        <Link href="/contact-page">
          <a className={styles.header_item}>contact</a>
        </Link>
      </header>

      <main>{children}</main>
    </div>
  );
}
