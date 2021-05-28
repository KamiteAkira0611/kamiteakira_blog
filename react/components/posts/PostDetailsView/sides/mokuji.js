import styles from "./mokuji.module.scss";

const Mokuji = () => {
  return (
    <div className={styles.mokuji}>
      <h2>目次</h2>
      <ul>
        <li>動機</li>
        <li>作ったもの</li>
        <li>How To</li>
        <li>Tree View API</li>
        <li>詰まったこと</li>
        <li>今後やりたいこと</li>
        <li>参考</li>
      </ul>
    </div>
  );
};

export default Mokuji;
