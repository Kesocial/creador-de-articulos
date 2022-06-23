import fs from "fs";
import pages from "./pages.json";
export default async function handler({ method, query, body }, res) {
  if (method == "POST") {
    try {
      const { id, title, image } = body;
      const random = Math.floor(Math.random() * 50);
      const newID = title + "-" + random;
      const newURI = "/" + newID;
      const content = pages.find((e) => e.id === id).content;
      const page = {
        id: newID.replace(/\s+/g, "-"),
        URI: newURI.replace(/\s+/g, "-"),
        image,
        title,
        content,
      };
      for (let p in pages) {
        if (pages[p].id === id) {
          pages[p] = page;
        }
      }
      fs.writeFileSync("pages/api/pages.json", JSON.stringify(pages), "utf-8");
      res.setHeader("content-type", "text/html");
      res.status(200).send(content);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  } else {
  }
}
