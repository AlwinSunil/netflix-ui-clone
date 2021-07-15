import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import Button from "@material-ui/core/Button";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import LanguageIcon from "@material-ui/icons/Language";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Slider from "../../Components/Slider/Slider";
import { API_KEY, imgUrl } from "../../constants/constants";
import { trendingURL, genAction } from "../../urls";
import YouTube from "react-youtube";
import "./Details.scss";

function MobileDetails() {
  const [content, setContent] = useState([]);
  const [contentGenres, setContentGenres] = useState([]);
  const [trending, setTrending] = useState();
  const [action, setAction] = useState();
  const [video, setVideo] = useState();
  const [vidNum, setVidNum] = useState(0);
  const [vidNo, setVidNo] = useState();
  const [vid, setVid] = useState();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

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
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${slug}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setVidNo(response.data.results.length - 1);
        setVideo(response.data.results[`${vidNum}`]);
        console.log(response.data);
        console.log(response.data.results.length);
      });
  }, [slug, vidNum, vidNo, vid]);

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
                      <p className="tag">{item.release_date.substring(0, 4)}</p>
                      <p className="tag">{item.runtime} M</p>
                      <p className="tag language">{item.original_language}</p>
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
            {video && (
              <div className="video">
                <h2>{video.name}</h2>
                <YouTube videoId={video.key} key={video.id} opts={opts} />
              </div>
            )}
            {vid ? (
              <div className="video__end">
                <h2>You Saw all videos</h2>
                <div class="action-btn video__end-btn">
                  <Button
                    onClick={() => {
                      setVid();
                    }}
                  >
                    <SkipNextIcon />
                    <p>&nbsp;See Once More</p>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="video__end btn-only">
                <div class="action-btn video__end-btn">
                  <Button
                    onClick={() => {
                      if (vidNo > vidNum) {
                        setVidNum(vidNum + 1);
                      } else {
                        setVid(true);
                      }
                    }}
                  >
                    <SkipNextIcon />
                    <p>&nbsp;Next Video</p>
                  </Button>
                  <h3> Total Videos : {vidNo + 1}</h3>
                </div>
              </div>
            )}
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
