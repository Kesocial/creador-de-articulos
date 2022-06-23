import Link from "next/link";
export const Anchor = ({ content, href, noopener = false, size }) => {
  return (
    <>
      {noopener ? (
        <a target="noopener" href={href}>
          {content}
        </a>
      ) : (
        <Link href={href}>
          <a target={noopener && "noopener"} href={href}>
            {content}
          </a>
        </Link>
      )}
      <style jsx>{`
        a {
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

        a:hover {
          transform: rotate(360deg);
          background-color: var(--secondary-color-light);
          transition: all 0.2s ease-in-out !important;
        }
      `}</style>
    </>
  );
};
