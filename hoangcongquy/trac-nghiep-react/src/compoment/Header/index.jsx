import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import User from "../User";
import UserLogin from "../User/UserLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    visibility: "hidden",
  },
  title: {
    flexGrow: 1,
    "font-size": "1em",
  },
  logo: {
    padding: "20px",
    background: "#ffc000",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const item = JSON.parse(localStorage.getItem("user"));
  console.log(item)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.logo}>
            <Link to="/">TRẮC NGHIỆM</Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Đề Thi THPTQG
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Đề Thi Kiểm Tra
          </Typography>
          <Typography variant="h6" className={classes.title}>
            ENGLISH TEST
          </Typography>
          <Typography variant="h6" className={classes.title}>
            IT TEST
          </Typography>
          <Typography variant="h6" className={classes.title}>
            TÀI LIỆU
          </Typography>
          {item ? <UserLogin /> : <User />}
        </Toolbar>
      </AppBar>
    </>
  );
}
