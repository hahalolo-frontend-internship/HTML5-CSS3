import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#3a4bcd",
    textAlign: "center",
  },
  footerTop: {
    padding: "20px",
    color: "white",
    borderBottom:"1px solid",
    borderTop:"1px solid",
    margin:"25px 0"
  },
  content:{
    borderBottom:"1px solid",
    color:"#3a4bcd",
    padding:"10px"
  }
  ,
  footerMain:{
    width:"75%",
    margin:"auto",
  },
  list:{
    textAlign:"left",
    marginLeft:"2em",
    margin:"10px 0"
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.footer}>
      <Typography className={classes.footerTop} color="textSecondary" variant="h4">
        Trắc Nghiệm
      </Typography>
      <Grid container spacing={2} className={classes.footerMain}>
        <Grid item xs={4}>
          <Card variant="outlined" className={classes.cardContent}>
            <Typography className={classes.content} variant="h6">
              Thi THPT Quốc Gia
            </Typography>
            <Typography className={classes.list}>
              Bằng lái xe máy / môtô
            </Typography>
            <Typography className={classes.list}>
              Thi Công / Viên chức
            </Typography>
            <Typography className={classes.list}>Bằng lái / ô tô</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography className={classes.content} variant="h6">
              Đề Kiểm Tra
            </Typography>
            <Typography className={classes.list}>Đề thi học kì 1, 2</Typography>
            <Typography className={classes.list}>Đề kiểm tra 1 tiết</Typography>
            <Typography className={classes.list}>
              Đề kiểm tra 15 phút
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography className={classes.content} variant="h6">
              ENGLISH TEST
            </Typography>
            <Typography className={classes.list}>Ngữ pháp tiếng anh</Typography>
            <Typography className={classes.list}>Từ vựng tiếng anh</Typography>
            <Typography className={classes.list}>
              Tiếng anh THPT quốc gia
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Typography className={classes.footerTop} color="textSecondary">
        Copyright © 2020 by Tracnghiem.net
      </Typography>
     
      </Grid>
    </>
  );
}

export default Footer;
