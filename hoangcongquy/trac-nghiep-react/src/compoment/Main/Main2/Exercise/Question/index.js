import React, { useState } from "react";
import Rank from "./Rank";
import Answer from "../Answer";
import useClock from "../../../../hooks/Clock";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory, Link } from "react-router-dom";

import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
//dialog
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
///
const useStyles = makeStyles({
  breadcrumb: {
    borderBottom:"1px solid",
    padding: "15px",
    fontWeight: "500",
  },
  advertisement: {
    border: "1px solid",
    padding: "40px !important",
    "border-radius": "15px",
    margin: "40px 0",
    "min-height": "480px",
  },
  type_title: {
    display: "flex",
    "justify-content": "space-between",
    border: "1px solid",
    padding: "10px",
    "background-color": "cornflowerblue",
    "border-radius": "5px",
    margin: "20px 0px",
  },
  pos: {
    margin: "10px 0",
  },
  note: {
    color: "red",
  },
  btn: {
    "text-align": "center",
    position: "relative",
    marginTop: "30px",
  },
  dialog: {
    "text-align": "center",
  },
  titleDialog: {
    color: "#e1dec9",
    background: "#2b3cb0",
    "margin-bottom": "25px",
  },
  contentDialog: {
    margin: "auto",
    width: "75%",
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
  btnEnd: {
    "justify-content": "center",
    marginTop: "15px",
  },
});
function Question(props) {
  const { questions, onHandleChange, onSubmit, result, poni } = props;

  function handleChange(answer) {
    if (onHandleChange) {
      // console.log("ansawr", answer);
      onHandleChange(answer);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    onSubmit();
  }

  const classes = useStyles();

  //customhooks clock
  const { timeall, secondsIncrease } = useClock();
  const [secondsPause, setSecondsPause] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    clearInterval(secondsIncrease);
    setSecondsPause(secondsIncrease);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push("/main1/1");
  }

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
        <Link color="inherit" to="/" >
          TRANG CHỦ
        </Link>
        <Link
          color="inherit"
         to=""
        >
          ĐỀ THI HỌC KỲ
        </Link>
        <Link
          color="textPrimary"
         to="/"
          aria-current="page"
        >
          Tiếng Anh
        </Link>
        <Link
          color="textPrimary"
          to="/"
          aria-current="page"
        >
          Lớp 10
        </Link>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.advertisement}>
          <h2>Đề kiểm tra 15 phút môn Tiếng Anh Lớp 10</h2>
          <div className={classes.type_title}>
            <div>
              <input type="checkbox" defaultChecked />
              <span> {questions.length} câu</span>
            </div>
            <div>
              <p>Thời gian: {timeall}</p>
            </div>
          </div>
          <div className={classes.question}>
            <form onSubmit={handleSubmit}>
              {questions.map((question, key) => {
                return (
                  <React.Fragment key={question.id_question}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography className={classes.title} variant="h5">
                          <i> Câu hỏi: {key + 1}</i>
                        </Typography>
                        <Typography className={classes.pos}>
                          {question.content}
                        </Typography>
                        <Answer
                          answer={question.Answers}
                          question={question}
                          handleChange={handleChange}
                        />
                        <Typography className={classes.note}>
                          Hãy suy nghỉ kỹ và trả lời câu hỏi
                        </Typography>
                      </CardContent>
                    </Card>
                  </React.Fragment>
                );
              })}
              <div className={classes.btn}>
                {questions.length > -1 ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    value="Nộp Bài"
                    onClick={handleClickOpen}
                  >
                    Nộp bài
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className={classes.dialog}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              className={classes.titleDialog}
            >
              Chúc mừng bạn đã hoàn thanh bài thi
            </DialogTitle>
            <DialogContent dividers className={classes.contentDialog}>
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
                      Thời gian làm xong bài
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
            </DialogContent>
            <DialogActions className={classes.btnEnd}>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                Làm bài mới
              </Button>
            </DialogActions>
            <DialogContent>
              <Link to="/">
                <Typography variant="body2" component="p">
                  <i className="fas fa-home">Trở về trang chủ</i>
                </Typography>
              </Link>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid item xs={4} className={classes.advertisemen_rank}>
          <Rank />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Question;
