import React, { useState, useEffect } from "react";
import { API_KEY } from '../../constants/constants';
import axios from '../../axios';
import "./MoblieSilder.scss";

function ShowsContainer() {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setProgram(response.data.results);
    });
  }, []);

  return (
    <div className="shows-container">
      <h3>Trending</h3>
      <div className="shows-row">
        {program.map((item) => (
          <div key={item.id} className="shows-link">
            <img
              className="show-img"
              src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
              alt=""
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowsContainer;
