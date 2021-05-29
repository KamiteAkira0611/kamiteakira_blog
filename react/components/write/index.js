import styles from "./index.module.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import marked from "marked";
import PostDetailsView from "components/posts/PostDetailsView";
import highlight from "highlightjs";
import "highlightjs/styles/an-old-hope.css";

const Write = () => {
  const [markdown, setMarkdown] = useState(
    localStorage.getItem("markdown") || ""
  );
  const [title, setTitle] = useState(localStorage.getItem("title") || "");

  const post = {
    title: title,
    html: { __html: marked(markdown) },
  };

  const removeClass = () => {
    const text = markdown.replace(/ class=".*?"/g, "");
    setMarkdown(text);
  };
  const replaceHTML = () => {
    var text = markdown.replace(/<div.*?>/g, "");
    text = text.replace(/<div.*?>/g, "").replace(/<\/div>/g, "");
    text = text.replace(/<p.*?>/g, "\n").replace(/<\/p>/g, "");
    text = text.replace(/<code.*?>/g, "```\n").replace(/<\/code>/g, "```");
    text = text.replace(/<.*?>/g, "").replace(/<.*?>/g, "");
    setMarkdown(text);
  };

  const saveLS = () => {
    localStorage.setItem("markdown", markdown);
    localStorage.setItem("title", title);
  };

  marked.setOptions({
    highlight: function (code, lang) {
      return highlight.highlightAuto(code, [lang.split(":")[0]]).value;
    },
  });

  return (
    <div>
      <button onClick={removeClass}>Classを削除</button>
      <button onClick={replaceHTML}>HTMLを削除</button>
      <button onClick={saveLS}>保存</button>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <SimpleMDE onChange={(e) => setMarkdown(e)} value={markdown} />
      <PostDetailsView post={post} />
    </div>
  );
};

export default Write;
