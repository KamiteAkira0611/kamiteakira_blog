import React from "react";
import TodayIcon from "@material-ui/icons/Today";
import UpdateIcon from "@material-ui/icons/Update";
import styles from "./title.module.scss";
import Image from "next/image";

const Title = ({ title = "テスト" }) => {
  return (
    <div className={styles.title}>
      <div className={styles.top_img}>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1>{title}</h1>
      <div className={styles.dates}>
        <div className={styles.date}>
          <TodayIcon />
          <span>2021.05.25に公開</span>
        </div>
        <div className={styles.date}>
          <UpdateIcon />
          <span>2021.05.26に更新</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
