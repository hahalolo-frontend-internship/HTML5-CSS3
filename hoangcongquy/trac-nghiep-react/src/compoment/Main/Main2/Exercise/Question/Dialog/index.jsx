import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {
   Card,
   Grid,
   makeStyles,
 } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

const useStyles = makeStyles({
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
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
                      {/* {result} */}
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
                      {/* {poni} */}
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
                      {/* {secondsPause}s */}
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
               //  onClick={handleClick}
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
    </div>
  );
}
