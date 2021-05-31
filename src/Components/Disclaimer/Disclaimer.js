import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Disclaimer.scss";

function Disclaimer(props) {
  const [warning, setWarning] = useState(true);

  function closeDisclaimer(event) {
    // Here, we invoke the callback with the new value
    setWarning(null);
    props.onChange(event.target.value);
  }

  return (
    <div className="disclaimer">
      <p className="disclaimer-content">
        This website is just a mock up of Video Streaming Platform's UI. All
        content displayed on this page are public informations available on
        internet.
      </p>
      <p className="copyright">
        All rights reserve to the orginal copyright owners.
      </p>
      <Button
        className="disclaimer-btn"
        variant="contained"
        component="span"
        value={warning}
        onClick={closeDisclaimer}
      >
        Ok, Visit the site
      </Button>
    </div>
  );
}

export default Disclaimer;
