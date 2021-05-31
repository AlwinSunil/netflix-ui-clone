import React, { useState, useEffect } from "react";
import { API_KEY } from "./constants/constants";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";
import DesktopSlider from "./Components/DesktopSlider";
import MoblieSilder from "./Components/MobileSlider/MoblieSilder";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import axios from "./axios";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import "./App.scss";
import Warning from "./Components/Warning/Warning";

function App() {
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [program, setProgram] = useState();
  const [trendingOne, setTrendingOne] = useState();

  useEffect(() => {
    if (window.innerWidth > 700) {
      setMobile(null);
    }
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setProgram(response.data.results);
      setTrendingOne([response.data.results[0]]);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={banner ? "banner" : "app"}>
      {banner ? (
        <Disclaimer value={banner} onChange={() => setBanner(null)} />
      ) : null}

      {banner ? null : (
        <>
          {loading ? (
            <LoadingAnimation />
          ) : (
            <div className="home">
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
        </>
      )}
      <Warning />
      <Footer />
    </div>
  );
}

export default App;
