import imagesJSON from "../../pages/api/storage/images.json";
import { RiImageAddFill } from "react-icons/ri";
import { uploadImage } from "../../utils/upload";
import { ButtonFile } from "../Buttons";
export default function Aside() {
  return (
    <>
      <article className="aside">
        <div>
          <header>
            <h3>Imagenes subidas</h3>
            <ButtonFile id="file-aside" event={(e) => uploadImage(e.target)} />
          </header>
          <section className="imagesUploaded">
            <div className="imagesUploaded__images">
              {imagesJSON.map((e) => (
                <img
                  alt={e.name}
                  key={e.name}
                  src={"http://localhost:3000/" + e.src}
                />
              ))}
            </div>
          </section>
        </div>
      </article>
      <style jsx>
        {`
          .aside > div {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
