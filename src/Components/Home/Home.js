import React, { useState, useEffect } from "react";
import { API_KEY } from "../../constants/constants";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import DesktopSlider from "../../Components/DesktopSlider";
import MoblieSilder from "../../Components/MobileSlider/MoblieSilder";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./Home.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [program, setProgram] = useState([]);
  const [trendingOne, setTrendingOne] = useState([]);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setMobile(null);
    }
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      console.log(response.data)
      // setProgram(response.data.results);
      // setTrendingOne([response.data.results[1]]);
    });
    setLoading(false);
  }, []);


  return (
    <div className="home">
      {loading ? <LoadingAnimation /> : (
        <div>
          <Navbar />
          <Header data={trendingOne} />

          {mobile ? (
            <div className="home-content">
              <MoblieSilder />
              <MoblieSilder />
            </div>
          ) : (
            <div className="home-content">
              <DesktopSlider>
                {program.map((movie) => (
                  <DesktopSlider.Item movie={movie} key={movie.id}>
                    item1
                  </DesktopSlider.Item>
                ))}
              </DesktopSlider>
              <DesktopSlider>
                {program.map((movie) => (
                  <DesktopSlider.Item movie={movie} key={movie.id}>
                    item1
                  </DesktopSlider.Item>
                ))}
              </DesktopSlider>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
