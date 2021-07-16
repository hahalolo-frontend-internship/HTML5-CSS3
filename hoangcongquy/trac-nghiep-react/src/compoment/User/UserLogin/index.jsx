import {
  List,
  ListItem,
  makeStyles,
  ListItemText,
  Collapse,
  Button
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "30px",
  },
  list:{
   border:"1px solid",
  }
}));

function UserLogin(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
function onClick(){
  localStorage.removeItem('user');
}
  const item = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText>{` Welcome: ${item.name}`}</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button >
              <ListItemText>
                <Button variant="contained" onClick={onClick}><Link to="/">Đăng xuất</Link></Button>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>
      </>
  );
}
export default UserLogin;
