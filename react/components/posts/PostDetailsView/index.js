import styles from "./style.module.scss";
import Body from "./body";
import Title from "./tilte";

const PostDetailsView = () => {
  return (
    <div className={styles.contents}>
      <Title />
      <Body />
    </div>
  );
};

export default PostDetailsView;
