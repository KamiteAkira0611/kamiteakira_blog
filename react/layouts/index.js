import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./style.module.scss";
import { theme } from "assets/theme";

export default function Layout({ children, title = "No Title" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
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

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header className={styles.header}>
          <div className={styles.container}>
            <Link href="/">
              <div className={styles.logo}>
                <div className={styles.logo_img}>
                  <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    layout="fill"
                    className={styles.img}
                  />
                </div>
                <p className={styles.logo_text}>Bash</p>
              </div>
            </Link>
          </div>
        </header>

        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
}
