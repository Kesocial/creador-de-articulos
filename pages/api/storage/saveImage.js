// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import images from "./images.json";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};
export default function handler({ method, query, body }, res) {
  if (method === "POST") {
    const { lastModified, size, type, data, name } = body;
    const src = "api/storage/uploads/" + name;
    if (!images.find((e) => e.name === name)) {
      images.push({ name, type, size, src });

      fs.writeFile("pages/" + src, data, "base64", function (err) {
        console.log(err);
      });
      res.status(200).json({
        name: name,
        type: type,
        size: size,
        src: src,
        lastModified: lastModified,
      });
      fs.writeFileSync(
        "pages/api/storage/images.json",
        JSON.stringify(images),
        "utf-8"
      );
    }
  } else if (method === "GET") {
    res.status(200).send("Envia una peticion POST para guardar datos");
  }
}
