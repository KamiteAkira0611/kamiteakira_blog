import styles from "./index.module.scss";
import Body from "./body";
import Title from "./tilte";
import Side from "./side";

const PostDetailsView = () => {
  return (
    <div className={styles.contents}>
      <Title />

      <div className={styles.wrapper}>
        <Body />
        <Side />
      </div>
    </div>
  );
};

export default PostDetailsView;
