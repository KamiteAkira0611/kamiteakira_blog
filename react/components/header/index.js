import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
