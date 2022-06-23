import {
  FaBold,
  FaItalic,
  FaLink,
  FaUnderline,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaRegSave,
} from "react-icons/fa";
import { GoListUnordered, GoListOrdered } from "react-icons/go";
import { MdTitle } from "react-icons/md";
import { RiPagesFill, RiVideoFill } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import Aside from "./aside";
import { Anchor } from "../Anchors";
import { ButtonCircle } from "../Buttons";
import { guardarContenidoDeLaPagina } from "../../utils/upload";

export const TextEditor = ({ content, id, setContent }) => {
  const contentRef = useRef();
  const [pagina, setPagina] = useState();
  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);
  const ejecuteCommand = (e) => {
    document.execCommand("enableObjectResizing", false, null);
    let command = e.dataset["element"];
    if (command === "createLink") {
      let url = prompt("Ingrese el link a referir", "http://");
      contentRef.current.focus();
      document.execCommand(command, false, url);
    } else if (command === "formatBlock") {
      contentRef.current.focus();
      document.execCommand(command, false, "<h1>");
    } else if (command === "insertVideo") {
      contentRef.current.focus();
      let url = prompt("Ingrese el link a referir", "");
      let _url = url.split("=")[1].split("&")[0];
      console.log(_url);
      document.execCommand(
        "insertHTML",
        false,
        `</br><iframe width="100%" height="300" src="https://www.youtube.com/embed/${_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </br>`
      );
    } else {
      contentRef.current.focus();
      document.execCommand(command, false, null);
    }
  };

  const onDragEnter = () => {
    contentRef.current.classList.add("onEnter");
  };
  const onDragLeave = () => {
    contentRef.current.classList.remove("onEnter");
  };

  const guardarPagina = async () => {
    setContent(contentRef.current.innerHTML);
    guardarContenidoDeLaPagina({ content: contentRef.current.innerHTML, id });
  };

  return (
    <>
      <main>
        <Aside />
        <article style={{ marginLeft: "300px" }} className="text-editor">
          <section className="text-editor-header">
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="bold"
            >
              <FaBold />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="formatBlock"
            >
              <MdTitle />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="italic"
            >
              <FaItalic />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="underline"
            >
              <FaUnderline />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="insertUnorderedList"
            >
              <GoListUnordered />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="insertOrderedList"
            >
              <GoListOrdered />
            </button>

            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="createLink"
            >
              <FaLink />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="justifyLeft"
            >
              <FaAlignLeft />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="justifyCenter"
            >
              <FaAlignCenter />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="justifyRight"
            >
              <FaAlignRight />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="justifyFull"
            >
              <FaAlignJustify />
            </button>
            <button
              onClick={(e) => ejecuteCommand(e.target)}
              className="text-editor-header__btn"
              data-element="insertVideo"
            >
              <RiVideoFill />
            </button>
          </section>
          <section
            ref={contentRef}
            className="content"
            contentEditable="true"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDragLeave}
          ></section>
        </article>
        <div>
          <ButtonCircle
            size={25}
            content={<FaRegSave />}
            onClick={guardarPagina}
          />

          <Anchor
            size={25}
            content={<RiPagesFill />}
            href={"/" + id}
            noopener={true}
          />
        </div>
      </main>
      <style jsx>{`
        div {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 50px;
          height: 100px;
        }
      `}</style>
    </>
  );
};
