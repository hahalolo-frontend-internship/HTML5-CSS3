import { Link, useHistory } from "react-router-dom";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  dialog: {
    width: "500px",
    height: "420px",
    margin: "auto",
    background: "white",
    "border-radius": "10px",
    "text-align": "center",

    "box-shadow": "0 0 50px black",

    position: "fixed",
    right: "25em",
    bottom: "12em",
    padding: "10px",
  },
  title: {
    color: "#e1dec9",
    width: "100%",
    background: "#2b3cb0",
    "border-radius": "10px 10px 0 0",
    "margin-bottom": "48px",
    padding: "21px 0",
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    padding: "12px",
    background: "#2b3cb0",
    color: "White",
    "font-weight": "500",
    "min-height": "80px",
  },
  point: {
    color: "red",
    fontWeight: "500",
  },
  btn: {
    "justify-content": "center",
    margin: '10px 0',
  },
  x: {
    position: "absolute",
    top: "0",
    right: "0",
    border: "1px solid",
    color: "red",
    borderRadius: "10px",
    backgroundColor: "white",
    fontSize: '30px',
    cursor: 'pointer',
  },
});
function Dialog(props) {
  const { result, poni, secondsPause, onClose } = props;
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push("/main1/1");
  }
  const classes = useStyles();

  function handlExit() {
    onClose();
  }
  return (
    <>
      <Card className={classes.dialog} variant="outlined">
        <CardContent>
          <DeleteForeverIcon className={classes.x} onClick={handlExit} />
        </CardContent>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h5"
          >
            Chúc mừng bạn đã hoàn thanh bài thi
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card variant="outlined">
                <Typography
                  className={classes.list}
                  color="textSecondary"
                  gutterBottom
                >
                  Số câu trả lời đúng của bạn
                </Typography>
                <Typography
                  className={classes.point}
                  color="textSecondary"
                  gutterBottom
                >
                  {result}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card variant="outlined">
                <Typography
                  className={classes.list}
                  color="textSecondary"
                  gutterBottom
                >
                  Số điểm của bạn đạt được
                </Typography>
                <Typography
                  className={classes.point}
                  color="textSecondary"
                  gutterBottom
                >
                  {poni}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card variant="outlined">
                <Typography
                  className={classes.list}
                  color="textSecondary"
                  gutterBottom
                >
                  Thời gian làm xong bài:
                </Typography>
                <Typography
                  className={classes.point}
                  color="textSecondary"
                  gutterBottom
                >
                  {secondsPause}s
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.btn}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Làm bài mới
          </Button>
        </CardActions>
        <Typography variant="body2" component="p">
          <Link to="/">
            <i className="fas fa-home">Trở về trang chủ</i>
          </Link>
        </Typography>
      </Card>
    </>
  );
}

export default Dialog;
