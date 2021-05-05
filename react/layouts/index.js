import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./style.module.scss";

export default function Layout({ children, title = "No Title" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&subset=japanese"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width="35"
                height="30"
                className={styles.img}
              />
              <p>Bash</p>
            </div>
          </Link>
        </div>
        {/* <Link href="/">
          <a className={styles.header_item}>home</a>
        </Link>
        <Link href="/blog-page">
          <a className={styles.header_item}>blog</a>
        </Link>
        <Link href="/contact-page">
          <a className={styles.header_item}>contact</a>
        </Link> */}
      </header>

      <CssBaseline />

      <ThemeProvider>
        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
}
