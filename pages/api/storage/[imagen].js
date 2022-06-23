import data from "./images.json";
export default async function handler({ method, query }, res) {
  const { imagen } = query;
  if (method == "GET") {
    const result = data.find((obj) => obj.name === imagen);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Archivo no encontrado");
    }
  }
}
