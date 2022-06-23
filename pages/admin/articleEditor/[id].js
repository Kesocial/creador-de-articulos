import { TextEditor } from "../../../components/TextEditor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import pagesJSON from "../../api/pages.json";

export default function ArticleEditor() {
  const router = useRouter();
  const [content, setContent] = useState("");
  useEffect(() => {
    if (!router.isReady) return;
    setContent(pagesJSON.find((e) => e.id === router.query.id).content);
    console.log(content);
  }, [router, content]);
  return (
    <>
      {content && (
        <TextEditor
          setContent={setContent}
          content={content}
          id={router.query.id}
        />
      )}
    </>
  );
}
