import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer css={footer}>
        <div css={wrapper}>
          <Link href={`https://github.com/chigomuh/666666`}>
            <a>
              <Image
                src={`/svg/github-icon.svg`}
                alt={`github-icon`}
                width={32}
                height={32}
              />
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const wrapper = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  cursor: "pointer",
});

const footer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "3rem",
  width: "100%",
  color: "#c9d1d9",
  backgroundColor: "#0d1117",
});
