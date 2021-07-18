import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import icon_logout from "../../img/sign-out-alt-solid.svg";
import icon_user from "../../img/user-icon.png";
// import clsx from "clsx";
const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    
  },
  btn_radius: {
    borderRadius: 30,
    padding: "4px 8px 4px 20px",
    textTransform: "unset",
    width: "max-content",
    background: "#b2deff",
    color: "#065592",
    "&:hover": {
      background: "#57b5fc",
      color: "#fff",
    },
  },
  avatar: {
    width: "35px",
    height: "35px",
    background: "#065592",
  },
  logout: {
    width: "25px",
    height: "25px",
  },
  appear: {
    display: "flex",
    position: "absolute",
    background: "#fff",
    top: "calc(100% + 10px)",
    right: "0",
    width: "max-content",
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    "&:hover": {
      background: "#57b5fc",
      color: "#fff",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [toogle, setToogle] = useState(false);
  const history = useHistory();
  function logout() {
    setToogle(false);
    localStorage.removeItem("isSignIn");
    history.push("/");
    props.signIn("logout");
  }
  function toogleLogout() {
    setToogle(!toogle);
  }
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="logo web" />
            </Link>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              className={classes.title}
              variant="scrollable"
            >
              <Tab label={<Link to="/exam_nation">Thi THPTQG</Link>} />
              <Tab label="ĐỀ THI KIỂM TRA" />
              <Tab label="ENGLISH TEST" />
              <Tab label="IT TEST" />
              <Tab label="ĐẠI HỌC" />
              <Tab label="HƯỚNG NGHIỆP" />
              <Tab label="TÀI LIỆU" />
            </Tabs>

            <Box>
              <Button
                className={classes.btn_radius}
                size="large"
                endIcon={
                  <Box className={classes.avatar} borderRadius={"50%"}>
                    <img src={icon_user} alt="avatar" />
                  </Box>
                }
              >
                {props.user ? (
                  <>
                    <Typography onClick={toogleLogout}>
                      {props.user.firstname} {props.user.lastname}
                    </Typography>
                    {toogle && (
                      <Button
                        className={classes.appear}
                        onClick={() => logout()}
                        endIcon={
                          <Box className={classes.logout}>
                            <img src={icon_logout} alt="avatar" />
                          </Box>
                        }
                      >
                        Đăng xuất
                      </Button>
                    )}
                  </>
                ) : (
                  <Link to="/login">
                    <p className="user-name">Đăng nhập</p>
                  </Link>
                )}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar position="static" align="center">
        <Box m={1}> Bài kiểm tra</Box>
      </AppBar>
    </>
  );
}
