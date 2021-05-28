import styles from "./index.module.scss";
import Body from "./body";
import Title from "./tilte";
import Side from "./side";

const PostDetailsView = ({ post }) => {
  return (
    <div className={styles.contents}>
      <Title title={post.title} />

      <div className={styles.wrapper}>
        <Body html={post.html} />
        <Side />
      </div>
    </div>
  );
};

export default PostDetailsView;
