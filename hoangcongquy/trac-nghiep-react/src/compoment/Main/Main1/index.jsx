import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Button, Container, Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  task: {
    marginBottom: "50px",
  },
  breadcrumb: {
    borderBottom: "1px solid",
    padding: "15px",
    fontWeight: "500",
  },
  rank: {
    width: "90%",
    "min-height": "100px",
    "text-align": "center",
    "margin-top": "50px",
    opacity: "0.5",
    border: "1px solid",
    height: "100px",
    "border-radius": "10px",
  },
  name: {
    marginBottom: "25px",
  },
  advertisement: {
    border: "1px solid",
    padding: "40px !important",
    "border-radius": "15px",
    margin: "40px 0",
    "min-height": "480px",
  },
  formControl: {
    marginBottom: "20px",
    marginRight: "200px",
  },
  paragraph: {
    margin: "15px 0",
  },
  btn: {
    textAlign: "center",
    marginTop: "30px",
  },
});

function Main1(props) {
  const classes = useStyles();

  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log("isloading", isLoading);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  ///😍😍
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const types = await axios.get(
          `http://localhost:3000/typedata?id_typedata=${id}`
        );
        setData(types?.data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const history = useHistory();

  const checkData = localStorage.getItem("user");
  console.log(checkData);

  function handleClick() {
    if (checkData) {
      history.push("/main1/1/main2");
    } else {
      history.push("/Login");
    }
  }
  return (
    <>
      <Container>
        <div className={classes.task}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            <Link color="inherit" to="/">
              TRANG CHỦ
            </Link>
            <Link color="inherit" to="/">
              {data.type}
            </Link>
          </Breadcrumbs>
          <Grid container spacing={2}>
            <Grid item xs={8} className={classes.advertisement}>
              <h1 className={classes.name}>Đề thi trắc nghiệm</h1>
              <div>
                <h3>B1: Chọn lớp và môn học</h3>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Lớp</InputLabel>
                    <Select native defaultValue="" id="grouped-native-select">
                      <option aria-label="None" value="" />
                      <option value={1}>Lớp 10</option>
                      <option value={2}>Lớp 9</option>
                      <option value={3}>Lớp 8</option>
                      <option value={4}>Lớp 7</option>
                      <option value={5}>Lớp 6</option>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Môn</InputLabel>
                    <Select native defaultValue="" id="grouped-select">
                      <option aria-label="None" value="" />
                      <option value={1}>Tiếng Anh</option>
                      <option value={2}>Toán</option>
                      <option value={3}>Vật Lý</option>
                      <option value={4}>Hóa Học</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                <h3>B2: Chọn nội dung</h3>
                <p className={classes.paragraph}>
                  Các em có thể chọn 1 hoặc nhiều nội dung của các chương để hệ
                  thống tự tổng hợp ngẫu nhiên thành ma trận đề kiểm tra cho các
                  em
                </p>
                <List>
                  <ListItem
                    dense
                    button
                    // onClick={handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        // checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={`Ngữ pháp tiếng anh`} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="comments"
                        onClick={handleExpandClick}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <List>
                    {[0, 1, 2, 3, 4].map((value) => {
                      const labelId = `checkbox-list-label-${value}`;

                      return (
                        <React.Fragment key={value}>
                          <ListItem
                            dense
                            button
                            // onClick={handleToggle(value)}
                          >
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                // checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              id={labelId}
                              primary={`Ngữ pháp tiếng anh ${value + 1}`}
                            />
                          </ListItem>
                        </React.Fragment>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                onClick={handleClick}
              >
                <Link to={`/main1/${id}/main2`}>Bắt đầu làm bài</Link>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.rank}></div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Main1;
