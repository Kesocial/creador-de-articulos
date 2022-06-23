import fs from "fs";
import pages from "./pages.json";
export default async function handler({ method, query, body }, res) {
  if (method == "PUT") {
    try {
      pages = pages.filter((e) => e.id !== body.id);
      fs.writeFileSync("pages/api/pages.json", JSON.stringify(pages), "utf-8");
      res.status(200);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  }
}
