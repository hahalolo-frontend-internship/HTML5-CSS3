import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "margin-right": "3px",
  },
}));

export default function User() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained"  className={classes.button}>
        <Link to="/Login">Đăng nhập</Link>
      </Button>
      <Button variant="contained" className={classes.button}>
        <Link to="/Registration">Đăng ký </Link>
      </Button>
    </div>
  );
}
