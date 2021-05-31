import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { API_KEY, imgUrl } from "../../constants/constants";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import axios from "../../axios";
import "./Header.scss";

function Header({ data }) {
  const [trendingDetails, setTrendingDetails] = useState([]);
  const [trendingGenres, setTrendingGenres] = useState([]);

  const id = data[0].id;

  useEffect(() => {
    axios.get(`movie/${id}?api_key=${API_KEY}`).then((response) => {
      setTrendingDetails([response.data]);
      setTrendingGenres(response.data.genres);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {trendingDetails.map((item) => (
        <div key={item.id} className="header">
          <div className="content__background">
            <div className="content__background__shadow" />
            <div
              className="content__background__image"
              style={{
                "backgroundImage": `url(${imgUrl}/original/${item.backdrop_path})`,
              }}
            />
          </div>
          <div className="header-backdrop">
            <div className="header-content">
              <p className="trending">
                <span>#1</span>Trending
              </p>
              <h3>{item.title}</h3>
              <div className="tags">
                {item.adult ? (
                  <p className="tag">Adult : {item.adult}</p>
                ) : null}
                {trendingGenres.map((gen) => (
                  <p className="tag genres" key={gen.id}>{gen.name}</p>
                ))}
                <p className="tag">{item.release_date.substring(0, 4)}</p>
                <p className="tag">{item.runtime} M</p>
                <p className="tag language">{item.original_language}</p>
              </div>
              <p className="overview">{item.overview}</p>
              <div className="action-btn">
                <Button>
                  <PlayCircleFilledWhiteIcon className="action-icon" />
                  <a
                    href={item.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Trailer
                  </a>
                </Button>
                <Button>
                  <MoreHorizIcon className="action-icon" />
                  <a
                    href={item.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Header;
