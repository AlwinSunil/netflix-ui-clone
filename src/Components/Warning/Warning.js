import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./Warning.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "table",
    padding: "0.5rem 0.5rem 0px 0.5rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Warning() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        className={classes.root}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" elevation={1}>
          All data is from&nbsp;
          <a
            className="alert-content"
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            themoviedb.org
          </a>
          .
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Warning;
