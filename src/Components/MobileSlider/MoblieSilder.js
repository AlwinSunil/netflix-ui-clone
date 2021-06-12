import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
            <Link to={`/${item.id}`}>
            <Button>
              <div key={item.id} className="shows-link">
                <img
                  className="show-img"
                  src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                  alt=""
                ></img>
              </div>
              </Button>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ShowsContainer;
