import styles from "./mokuji.module.scss";

const Mokuji = () => {
  return (
    <div className={styles.mokuji}>
      <h2>目次</h2>
      <ul>
        <li>
          <a href="#はじめに">動機</a>
        </li>
        <li>
          <a href="#はじめに">作ったもの</a>
        </li>
        <li>
          <a href="#はじめに">How To</a>
        </li>
        <li>
          <a href="#はじめに">Tree View API</a>
        </li>
        <li>
          <a href="#はじめに">詰まったこと</a>
        </li>
        <li>
          <a href="#はじめに">今後やりたいこと</a>
        </li>
        <li>
          <a href="#はじめに">参考</a>
        </li>
      </ul>
    </div>
  );
};

export default Mokuji;
