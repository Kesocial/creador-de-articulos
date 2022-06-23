import fs from "fs";
import pages from "./pages.json";
export default async function handler({ method, query, body }, res) {
  if (method == "POST") {
    try {
      const { id, title, image, description, URI, URIEdit, content } = body;
      pages.push({
        id: id.replace(/\s+/g, "-"),
        title,
        image,
        description,
        URI: URI.replace(/\s+/g, "-"),
        URIEdit: URIEdit.replace(/\s+/g, "-"),
        content,
      });
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
