import pages from "./api/pages.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Page() {
  const [page, setPage] = useState();
  const router = useRouter();
  const STATES = {
    IS_UNDEFINED: undefined,
    IS_NULL: null,
    IS_READY: true,
  };
  useEffect(() => {
    if (router.isReady) {
      const {
        query: { pageTitle },
      } = router;
      console.log(pageTitle);
      console.log(pages);
      const pageFind = pages.find((p) => p.id === pageTitle);

      if (pageFind) {
        pageFind.content = pageFind.content.replace(
          `contenteditable="true"`,
          ""
        );
        setPage(pageFind);
      } else {
        router.push("404");
      }
    }
  }, [router, page]);
  return (
    <>
      <main
        className="article"
        dangerouslySetInnerHTML={{ __html: !page ? "Cargando" : page.content }}
      ></main>
      <style jsx>{`
        main {
          background-color: var(--secondary-text-color);
          max-width: 600px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
