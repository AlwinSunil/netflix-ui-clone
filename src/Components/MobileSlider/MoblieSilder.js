import React, { useState, useEffect } from "react";
import "./MoblieSilder.scss";

function ShowsContainer(props) {
  const [program, setProgram] = useState([]);
  console.log(props);

  useEffect(() => {
    setProgram(props.data);
  }, [props]);

  return (
    <div className="shows-container">
      <h3>{props.type}</h3>
      {program ? (
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
      ) : null}
    </div>
  );
}

export default ShowsContainer;
