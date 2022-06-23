import { IoCloseSharp } from "react-icons/io5";
const Modal = ({
  children,
  isOpen,
  closeModal,
  primaryColor,
  secondaryColor,
  buttonClose = true,
}) => {
  return (
    <>
      <article className="modal">
        <div>
          {buttonClose && (
            <button onClick={closeModal}>
              <IoCloseSharp />
            </button>
          )}

          {children}
        </div>
      </article>
      <style jsx>{`
        article {
          position: fixed;
          top: 0;
          left: 0;
          margin: auto;
          width: 100%;
          min-height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(2px);
          display: ${isOpen ? "flex" : "none"};
          place-content: center;
          place-items: center;
          z-index: 1000;
        }

        div {
          position: relative;
          width: 80%;
          height: 100%;
          overflow-y: auto;
          min-width: 200px;
          max-width: 600px;
          min-height: 300px;
          max-height: 600px;
          background-color: ${primaryColor};
          border-radius: 10px;
          ${!buttonClose && "border-top-right-radius: 0"}
          padding: 1.5rem;
          overflow-x: hidden;
        }
        button {
          font-size: 20px;
          background-color: ${primaryColor};
          border: none;
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          display: flex;
          place-content: center;
          place-items: center;
          transition: all 0.2s ease-in-out;
          z-index: 9999;
        }
        button:hover {
          transition: all 0.2s ease-in-out;
          background-color: ${secondaryColor};
        }
      `}</style>
    </>
  );
};
export default Modal;
