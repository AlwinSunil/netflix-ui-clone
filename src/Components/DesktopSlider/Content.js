import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../../constants/constants";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";

function Content({ movie, onClose }) {
  const reloadPage = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{
            backgroundImage: `url(${imgUrl}/original/${movie.backdrop_path})`,
          }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">{movie.title}</div>
          <div className="content__description">{movie.overview}</div>
          <div className="action-btn">
            <Button>
              <MoreHorizIcon className="action-icon" />
              {/* <a href={`/${movie.id}`} rel="noopener noreferrer">
                Know More link
              </a> */}
              <Link to={`/${movie.id}`} onClick={reloadPage}>
                Know More
              </Link>
            </Button>
          </div>
        </div>
        <button className="content__close" onClick={onClose}>
          <IconCross />
        </button>
      </div>
    </div>
  );
}

export default Content;
