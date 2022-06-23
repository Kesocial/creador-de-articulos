const host = "https://creador-de-articulos.vercel.app/";
export const uploadImage = (e) => {
  const file = e.files[0];
  let URI = "";
  try {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const dataSplit = reader.result.split(",")[1];
      await fetch("/api/storage/saveImage", {
        method: "POST",
        body: JSON.stringify({
          lastModified: e.lastModified,
          name: file.name,
          size: file.size,
          type: file.type,
          data: dataSplit,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    };
    URI = host+"/api/storage/uploads/" + file.name;
  } catch (err) {
    console.log(err);
  }
  return URI;
};
export const crearPagina = async (e) => {
  const random = Math.floor(Math.random() * 50);
  const ID = e.title + "-" + random;
  const URI = "/" + ID;
  const URIEdit = "/admin/articleEditor/" + ID;
  await fetch("/api/createPage", {
    method: "POST",
    body: JSON.stringify({
      id: ID,
      title: e.title,
      image: e.image,
      content: "Edita esta pagina desde el editor!!",
      URI: URI,
      URIEdit: URIEdit,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return URI;
};
export const editarPagina = async (e) => {
  await fetch("/api/editPage", {
    method: "POST",
    body: JSON.stringify({
      id: e.id,
      title: e.title,
      image: e.image,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
export const eliminarPagina = async (id) => {
  await fetch("/api/deletePage", {
    method: "PUT",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
export const guardarContenidoDeLaPagina = async ({ content, id }) => {
  await fetch("/api/saveContentPage", {
    method: "POST",
    body: JSON.stringify({
      id,
      content,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
