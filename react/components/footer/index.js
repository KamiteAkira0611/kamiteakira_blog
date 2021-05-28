import Image from "next/image";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logo_img}>
            <Image
              src="/logo.png"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </div>
          <p>geko geko...</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
