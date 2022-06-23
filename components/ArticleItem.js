import { RiPagesFill, RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { BsImageAlt } from "react-icons/bs";
import { useState } from "react";
import { uploadImage, crearPagina } from "../utils/upload";
import { Anchor } from "../components/Anchors";
import Image from "next/image";
import { ButtonCircle } from "./Buttons";
export const ArticleItem = ({
  admin = false,
  modalRef,
  editable = false,
  id,
  title,
  setTitle,
  setImage,
  setID,
  image,
  URI,
  URIEdit,
}) => {
  const adminOptions = () => {
    if (admin === true) {
      const { openModalEdit, openModalDelete } = modalRef;
      return (
        <section
          style={{
            flexDirection: "column",
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "min-content",
          }}
        >
          <Anchor href={URIEdit} content={<RiPagesFill />} />
          <ButtonCircle
            onClick={() => {
              setTitle(title);
              setImage(image);
              setID(id);
              openModalEdit();
            }}
            content={<FaPencilAlt />}
          />
          <ButtonCircle
            onClick={() => {
              setID(id);
              openModalDelete();
            }}
            content={<RiDeleteBin5Fill />}
          />
        </section>
      );
    }
  };
  return (
    <>
      <article>
        <div>
          {image === undefined && <div className="cargando">Cargando</div>}
          {image === null && (
            <div>
              <BsImageAlt className="preHolderImage" />
            </div>
          )}
          {image && <Image height="100px" width="100px" alt="" src={image} />}
        </div>
        {editable ? (
          <textarea
            style={{ padding: "5px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        ) : (
          <h4>{title}</h4>
        )}
        {adminOptions()}
      </article>
      <style jsx>{`
        article {
          position: relative;
          min-width: 320px;
          min-height: 130px;
          max-width: 320px;
          max-height: 130px;
          display: flex;
          border-radius: 5px;
          place-items: center;
          background-color: var(--main-color-light);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          transition: transform 0.5s ease-in-out;
        }

        div {
          width: 130px;
          overflow: hidden;
          height: 130px;
          border-radius: 10px;
          display: flex;
          place-items: center;
          place-content: center;
          overflow: hidden;
        }

        textarea {
          font-size: 1rem;
          font-weight: bold;
          width: 150px;
          background-color: inherit;
          border: none;
          text-align: left;
          resize: none;
          height: 100px;
        }

        textarea:focus,
        textarea:active {
          outline: none;
          animation: blink 1s step-start 0s infinite;
        }
        @keyframes blink {
          0% {
            border-bottom: 2px solid var(--secondary-color-light);
          }
          100% {
            border-bottom: 2px solid transparent;
          }
        }

        h4 {
          width: 150px;
          background-color: inherit;
          border: none;
          word-wrap: break-word;
          text-align: left;
          height: 100px;
        }
      `}</style>
    </>
  );
};
