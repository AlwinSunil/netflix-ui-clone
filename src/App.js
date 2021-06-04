import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Warning from "./Components/Warning/Warning";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Details from "./Pages/Details/Details";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [banner, setBanner] = useState(true);

  return (
    <div className={banner ? "banner" : "app"}>
      {banner ? (
        <Disclaimer value={banner} onChange={() => setBanner(null)} />
      ) : (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id" exact>
            <Navbar />
            <Details />
          </Route>
        </Switch>
      )}
      <Warning />
      <Footer />
    </div>
  );
}

export default App;
