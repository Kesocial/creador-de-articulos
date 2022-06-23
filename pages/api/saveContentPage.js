import fs from "fs";
import pages from "./pages.json";
export default async function handler({ method, body }, res) {
  if (method == "POST") {
    try {
      const { id, content } = body;
      const page = pages.find((e) => e.id === id);
      console.log(body);
      page.content = content;
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
  }
}
