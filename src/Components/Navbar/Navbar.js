import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-desk.png";
import logoMobile from "../../assets/icons/logo-mob.png";
import creator from "../../assets/img/profile.png";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Navbar.scss";

function Navbar() {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobile(true);
    }
  }, [mobile]);

  return (
    <div className="navbar">
      <IconButton className="nav-logo">
        <Link to="/" className="nav__link">
          <img
            className={mobile ? "logoMobile" : "logo"}
            alt="logo-netflix"
            src={mobile ? `${logoMobile}` : `${logo}`}
          ></img>
        </Link>
      </IconButton>
      <IconButton className="noti-btn-container">
        <NotificationsIcon className="noti-btn" />
      </IconButton>
      <Button>
        <img className="creator" src={creator} alt=""></img>
      </Button>
    </div>
  );
}

export default Navbar;
