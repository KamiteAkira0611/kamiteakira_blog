import styles from "./body.module.scss";
import highlight from "highlightjs";
import "highlightjs/styles/atom-one-dark.css";
import { useEffect } from "react";

function Body({ html }) {
  useEffect(() => {
    highlight.initHighlighting();
    highlight.initHighlighting.called = false;
  });

  return (
    <div className={styles.PostDetail}>
      <div dangerouslySetInnerHTML={html} />
    </div>
  );
}

export default Body;
