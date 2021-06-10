import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Slider from "../../Components/Slider/Slider";
import LanguageIcon from "@material-ui/icons/Language";
import { API_KEY, imgUrl } from "../../constants/constants";
import { trendingURL, genAction } from "../../urls";
import "../../Components/Header/Header";
import "./Details.scss";

function MobileDetails() {
  const [content, setContent] = useState([]);
  const [contentGenres, setContentGenres] = useState([]);
  const [trending, setTrending] = useState();
  const [action, setAction] = useState();

  const slug = useParams().id;
  console.log(slug);

  useEffect(() => {
    axios
      .get(
        `movie/${slug}?api_key=${API_KEY}&append_to_response=watch/providers`
      )
      .then((response) => {
        setContent([response.data]);
        setContentGenres(response.data.genres);
        console.log(response.data);
      });
    axios.get(`${trendingURL}`).then((response) => {
      setTrending(response.data.results);
    });
    axios.get(`${genAction}`).then((response) => {
      setAction(response.data.results);
    });
  }, [slug]);

  return (
    <div>
      <div>
        {content.map((item) => (
          <div className="details" key={item.id}>
            <div className="header">
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
                  <h3 className="header__title">{item.title}</h3>
                  <div className="details__tags">
                    <div className="tag__gen">
                      {item.adult ? (
                        <p className="tag">Adult : {item.adult}</p>
                      ) : null}
                      {contentGenres.map((gen) => (
                        <p className="tag genres" key={gen.id}>
                          {gen.name}
                        </p>
                      ))}
                    </div>
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
                        className="details__link"
                      >
                        Visit Offcial Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="full__description">
              <div className="tag__others">
                <p className="tag">{item.release_date.substring(0, 4)}</p>
                <p className="tag">{item.runtime} M</p>
                <p className="tag language">{item.original_language}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="details__slider__holder">
        <Slider data={trending} type="Trending" />
        <Slider data={action} type="Action" />
      </div>
    </div>
  );
}

export default MobileDetails;
