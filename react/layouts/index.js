import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./style.module.scss";
import { theme } from "assets/theme";
import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children, title = "No Title" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro&family=Kosugi+Maru&family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
