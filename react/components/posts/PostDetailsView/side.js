import styles from "./side.module.scss";
import Mokuji from "./sides/mokuji";

const Side = () => {
  return (
    <div className={styles.sideContainer}>
      <Mokuji />
    </div>
  );
};

export default Side;
