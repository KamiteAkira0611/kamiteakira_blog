import styles from "./index.module.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import marked from "marked";
import PostDetailsView from "components/posts/PostDetailsView";

const Write = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  const post = {
    title: title,
    html: { __html: marked(markdown) },
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <SimpleMDE onChange={(e) => setMarkdown(e)} />
      <div id="body">
        <PostDetailsView post={post} />
      </div>
    </div>
  );
};

export default Write;
