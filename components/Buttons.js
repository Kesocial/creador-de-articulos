import { RiImageAddFill } from "react-icons/ri";

export const ButtonCircle = ({ content, onClick, size }) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
      <style jsx>
        {`
          button {
            display: inline-block;
            ${size === undefined
              ? `
            width:35px;
            height: 35px;
            font-size:20px;
            `
              : `
            width: ${size + 15 + "px"};
            height: ${size + 15 + "px"};
            font-size: ${size + "px"};
            `}
            padding: 7px;
            margin: 2px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: var(--main-color-light);
            transition: all 0.5s ease-in-out !important;
          }
          button:hover {
            transform: rotate(360deg);
            background-color: var(--secondary-color-light);
            transition: all 0.2s ease-in-out !important;
          }
        `}
      </style>
    </>
  );
};

export const ButtonFile = ({ event, id }) => {
  return (
    <>
      <label htmlFor={id}>
        <RiImageAddFill />

        <input
          onChange={event}
          data-element="insertImage"
          id={id}
          type="file"
        />
      </label>
      <style jsx>{`
        label {
          display: inline-block;
          width: 30px;
          height: 30px;
          padding: 2.5px;
          border-radius: 2.5px;
          font-size: 25px;
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
        }
        label:hover {
          transform: translateY(-3px);
          transition: transform 0.2s ease-in-out;
          background-color: var(--secondary-color-light);
        }
        input {
          display: none;
        }
      `}</style>
    </>
  );
};

export const ButtonBox = ({ content, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
      <style jsx>{`
        button {
          width: 30px;
          height: 30px;
          padding: 2.5px;
          border-radius: 2.5px;
          font-size: 25px;
          border: none;
          transition: transform 0.2s ease-in-out;
          background-color: var(--main-color-light);
          cursor: pointer;
        }
        button:hover {
          transform: translateY(-3px);
          transition: transform 0.2s ease-in-out;
          background-color: var(--secondary-color-light);
        }
      `}</style>
    </>
  );
};

export const ButtonText = ({ content, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
      <style jsx>{`
        button {
          width: min-content;
          height: 35px;
          padding: 2.5px;
          border-radius: 2.5px;
          font-size: 20px;
          border: 2px solid var(--secondary-color-light);
          transition: transform 0.2s ease-in-out;
          background-color: var(--main-color-light);
          cursor: pointer;
          padding: 5px;
        }
        button:hover {
          transform: translateY(-3px);
          transition: all 0.2s ease-in-out;
          background-color: var(--secondary-color-light);
          color: var(--main-color-light);
        }
      `}</style>
    </>
  );
};
