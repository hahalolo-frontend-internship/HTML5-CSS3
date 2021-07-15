import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();
  function logout() {
    localStorage.removeItem("isSignIn");
    history.push("/");
    props.signIn("logout");
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
              <Tab label="THI THPTQG" />
              <Tab label="ĐỀ THI KIỂM TRA" />
              <Tab label="ENGLISH TEST" />
              <Tab label="IT TEST" />
              <Tab label="ĐẠI HỌC" />
              <Tab label="HƯỚNG NGHIỆP" />
              <Tab label="TÀI LIỆU" />
            </Tabs>

            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Login
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar position="static" align="center">
        <Box m={1}> Bài kiểm tra</Box>
      </AppBar>
    </>
  );
}
