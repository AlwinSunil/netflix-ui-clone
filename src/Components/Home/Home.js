import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { trendingURL, discoverURL, genAction, genComedy } from "../../urls";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [trending, setTrending] = useState();
  const [discover, setDiscover] = useState();
  const [action, setAction] = useState();
  const [comedy, setComedy] = useState();
  const [trendingOne, setTrendingOne] = useState();

  useEffect(() => {
    axios.get(`${trendingURL}`).then((response) => {
      setTrending(response.data.results);
      setTrendingOne([response.data.results[0]]);
      console.log(response.data.results);
    });
    axios.get(`${discoverURL}`).then((response) => {
      setDiscover(response.data.results);
    });
    axios.get(`${genAction}`).then((response) => {
      setAction(response.data.results);
    });
    axios.get(`${genComedy}`).then((response) => {
      setComedy(response.data.results);
    });
    setData(true);
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [data]);

  return (
    <div className="home__conatiner">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="home">
          <Navbar />
          {trendingOne ? <Header data={trendingOne} /> : null}
          <div className="slider__holder">
            <Slider data={trending} type="Trending" />
            <Slider data={discover} type="Discover" />
            <Slider data={action} type="Action" />
            <Slider data={comedy} type="Comedy" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
