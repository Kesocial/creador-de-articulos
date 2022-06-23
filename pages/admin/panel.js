import pagesJSON from "../api/pages.json";
import { useState } from "react";
import Modal from "../../components/Modal";
import { ArticleItem } from "../../components/ArticleItem";
import { useModal } from "../../hooks/useModal";
import { FaPlus, FaRegSave } from "react-icons/fa";
import {
  uploadImage,
  crearPagina,
  editarPagina,
  eliminarPagina,
} from "../../utils/upload";
import {
  ButtonCircle,
  ButtonFile,
  ButtonBox,
  ButtonText,
} from "../../components/Buttons";
export default function Panel() {
  const [isOpenCreate, openModalCreate, closeModalCreate] = useModal();
  const [URICreate, setURICreate] = useState("");
  const [imageCreate, setImageCreate] = useState(null);
  const [titleCreate, setTitleCreate] = useState("titulo");

  const [isOpenEdit, openModalEdit, closeModalEdit] = useModal();
  const [URIEdit, setURIEdit] = useState();
  const [imageEdit, setImageEdit] = useState();
  const [titleEdit, setTitleEdit] = useState();
  const [IDEdit, setIDEdit] = useState();

  const [isOpenDelete, openModalDelete, closeModalDelete] = useModal();
  return (
    <>
      <main>
        <Modal
          isOpen={isOpenCreate}
          closeModal={closeModalCreate}
          primaryColor={"var(--main-color-light)"}
          secondaryColor={"var(--secondary-color-light)"}
        >
          <section>
            <div>
              <ButtonFile
                id="sendImageCreate"
                event={(e) => setImageCreate(uploadImage(e.target))}
              />
              <ButtonBox
                onClick={() => {
                  const URI = crearPagina({
                    title: titleCreate,
                    image: imageCreate,
                  });
                  setURICreate(URI);
                  closeModalCreate();
                }}
                content={<FaRegSave />}
              />
            </div>
            <ArticleItem
              editable={true}
              title={titleCreate}
              setTitle={setTitleCreate}
              URI={URICreate}
              image={imageCreate}
            />
          </section>
        </Modal>
        <Modal
          isOpen={isOpenEdit}
          closeModal={closeModalEdit}
          primaryColor={"var(--main-color-light)"}
          secondaryColor={"var(--secondary-color-light)"}
        >
          <section>
            <div>
              <ButtonFile
                id="sendImageEdit"
                event={(e) => setImageEdit(uploadImage(e.target))}
              />
              <ButtonBox
                onClick={() => {
                  editarPagina({
                    title: titleEdit,
                    image: imageEdit,
                    id: IDEdit,
                  });
                  closeModalEdit();
                }}
                content={<FaRegSave />}
              />
            </div>
            <ArticleItem
              editable={true}
              title={titleEdit}
              image={imageEdit}
              setTitle={setTitleEdit}
              URI={URIEdit}
            />
          </section>
        </Modal>
        <Modal
          isOpen={isOpenDelete}
          closeModal={closeModalDelete}
          primaryColor={"var(--main-color-light)"}
          secondaryColor={"var(--secondary-color-light)"}
          buttonClose={false}
        >
          <section
            style={{
              display: "flex",
              placeContent: "center",
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h4>¿Estas seguro de querer Eliminar el articulo?</h4>
            <div style={{ display: "flex", placeContent: "space-around" }}>
              <ButtonText
                onClick={() => {
                  eliminarPagina(IDEdit);
                  closeModalDelete();
                }}
                content={"Aceptar"}
              />
              <ButtonText
                onClick={() => {
                  closeModalDelete();
                }}
                content={"Rechazar"}
              />
            </div>
          </section>
        </Modal>
        <article>
          {pagesJSON.length !== 0 ? (
            pagesJSON.map((e, index) => (
              <ArticleItem
                admin={true}
                modalRef={{ openModalEdit, openModalDelete }}
                setTitle={setTitleEdit}
                setImage={setImageEdit}
                setID={setIDEdit}
                id={e.id}
                key={e.id}
                title={e.title}
                URIEdit={e.URIEdit}
                image={e.image}
              />
            ))
          ) : (
            <div>
              <h3 style={{ color: "var(--secondary-text-color)" }}>
                Aun no tienes ningun articulo
              </h3>
            </div>
          )}
        </article>
        <div
          style={{
            width: "min-content",
            margin: "10px",
            position: "fixed",
            bottom: 0,
            right: 0,
          }}
        >
          <ButtonCircle content={<FaPlus />} onClick={openModalCreate} />
        </div>
      </main>
      <style jsx>{`
        article {
          margin: 20px;
          width: calc(100% - 40px);
          display: grid;
          grid-template-columns: repeat(auto-fill, 320px);
          gap: 10px;
        }
        section {
          display: flex;
          width: 100%;
          padding: 2rem;
          position: absolute;
          top: 0;
          place-content: center;
          place-items: center;
          flex-direction: column;
        }
        section img {
          max-width: 300px;
        }
        div {
          width: 320px;
        }
      `}</style>
    </>
  );
}
