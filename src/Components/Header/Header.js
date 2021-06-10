import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import LanguageIcon from "@material-ui/icons/Language";
import { API_KEY, imgUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Header.scss";

function Header({ data }) {
  const [trendingDetails, setTrendingDetails] = useState([]);
  const [trendingGenres, setTrendingGenres] = useState([]);

  const id = data[0].id;
  console.log(id);

  useEffect(() => {
    axios
      .get(`movie/${id}?api_key=${API_KEY}&append_to_response=watch/providers`)
      .then((response) => {
        setTrendingDetails([response.data]);
        setTrendingGenres(response.data.genres);
        console.log('trend one :'+response.data);
      });
  }, [id]);

  return (
    <div>
      {trendingDetails ? (
        <>
          {trendingDetails.map((item) => (
            <div key={item.id} className="header">
              <div className="content__background">
                <div className="content__background__shadow" />
                <div
                  className="content__background__image"
                  style={{
                    backgroundImage: `url(${imgUrl}/original/${item.backdrop_path})`,
                  }}
                />
              </div>
              <div className="header__backdrop">
                <div className="header__content">
                  <p className="trending">
                    <span>#1</span>Trending
                  </p>
                  <h3>{item.title}</h3>
                  <div className="tags">
                    {item.adult ? (
                      <p className="tag">Adult : {item.adult}</p>
                    ) : null}
                    {trendingGenres.map((gen) => (
                      <p className="tag genres" key={gen.id}>
                        {gen.name}
                      </p>
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
                      <LanguageIcon className="action-icon" />
                      <a
                        href={item.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Offcial Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Header;
