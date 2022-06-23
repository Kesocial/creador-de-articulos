import fs from "fs";
import pages from "./pages.json";
export default async function handler({ method, query, body }, res) {
  if (method == "POST") {
    try {
      console.log(query);
      const { id } = body;
      const content = pages.find((e) => e.id === id).content;
      res.setHeader("content-type", "text/html");
      res.status(200).send("content");
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  }
}
