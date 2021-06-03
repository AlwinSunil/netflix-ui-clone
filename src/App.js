import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Warning from "./Components/Warning/Warning";
import "./App.scss";
import Home from "./Components/Home/Home";

function App() {
  const [banner, setBanner] = useState(true);

  return (
    <div className={banner ? "banner" : "app"}>
      {banner ? (
        <Disclaimer value={banner} onChange={() => setBanner(null)} />
      ) : (
        <Home />
      )}
      <Warning />
      <Footer />
    </div>
  );
}

export default App;
