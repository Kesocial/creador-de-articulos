import fs from "fs";
import imagesJSON from "../images.json";
export default async function handler({ method, query, body }, res) {
  if (method == "GET") {
    if (query) {
      const { img } = query;
      const obj = imagesJSON.find((e) => e.name === img);
      fs.readFile("pages/api/storage/uploads/" + img, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.setHeader("content-type", obj.type);
          res.status(200).send(data);
          console.log(query);
        }
      });
    } else {
      res.status(404).send("Archivo no encontrado");
    }
  }
}
