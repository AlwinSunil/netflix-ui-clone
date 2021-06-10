import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="watermark">
        This website is built with <span>React JS ⚛️</span> using&nbsp;
        <a
          href="https://themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          themoviedb.org&nbsp;
        </a>
        API.
      </p>
      <p className="watermark">
        Created by
        <a
          href="https://alwinsunil.tk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alwin Sunil
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
