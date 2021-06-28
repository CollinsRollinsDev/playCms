import styles from "../components/general.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  let [title, setTitle] = useState("");
  let [tags, setTags] = useState("");
  let [content, setContent] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/posting", {
      body: JSON.stringify({
        title: title,
        tags: tags,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    alert(res.formData.message);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>Add a Blog Post</h2>
      <form onSubmit={handleClick} method="post">
        <div>Add your post!</div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="tags"
          placeholder="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="contents"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default Admin;
