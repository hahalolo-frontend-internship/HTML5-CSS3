import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
    "font-weight": "500",
    "border-bottom": "1px dashed",
    "padding-bottom": "10px",
    color: "rgba(0, 0, 0, 0.8)",
  },
  big: {
    "font-weight": "500",
    color: "rgba(0, 0, 0, 1)",
  },
  banner: {
    "background-image": "url(/minion.jpg)",
    "text-align": "center",
    height: "700px",
    "background-size": "cover",
    "margin-bottom": "200px",
  },
  banner_content: {
    position: "absolute",
    right: "0",
    left: "0",
    top: "10em",
    background: "white",
    width: "500px",
    margin: "auto",
    padding: "25px",
    "border-radius": "10px",
    "box-shadow": "0px 0px 17px 8px",
  },
  banner_option: {
    width: "65%",
    margin: "auto",
    position: "absolute",
    top: "30em",
    right: "0",
    left: "0",
    "text-align": "center",
  },
  content: {
    padding: "20px",
    background: "#fee46d",
  },
  text: { color: "#FF0000" },
  text1: { color: "#FF5500" },
  text2: { color: "#FFAA00" },
  text3: { color: "#FFFF00" },
  text4: { color: "#54FF00" },
  text5: { color: "#00FF00" },
  text6: { color: "#00FF55" },
  text7: { color: "#00FFAA" },
  text8: { color: "#00FEFF" },
  text9: { color: "#00A9FF" },
  text10: { color: "#0000FF" },
  text11: { color: "#5500FF" },
  text12: { color: "#AA00FF" },
  text13: { color: "#FF00FE" },
  text14: { color: "#FF00AA" },
  text15: { color: "#FF0000" },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const types = await axios.get("http://localhost:3000/typedata");
      setData(types.data);
    }
    fetchData();
  }, []);

 

  return (
    <div>
      <div className={classes.banner}>
        <Card variant="outlined" className={classes.banner_content}>
          <CardContent>
            <Typography
              className={classes.big}
              color="textSecondary"
              variant="h4"
            >
              <span className={classes.text}>T</span>
              <span className={classes.text1}>R</span>
              <span className={classes.text2}>Ắ</span>
              <span className={classes.text3}>C</span>
              <span className={classes.text4}> N</span>
              <span className={classes.text5}>G</span>
              <span className={classes.text6}>H</span>
              <span className={classes.text7}>I</span>
              <span className={classes.text8}>Ệ</span>
              <span className={classes.text9}>M</span>
              <span className={classes.text10}> O</span>
              <span className={classes.text11}>N</span>
              <span className={classes.text12}>L</span>
              <span className={classes.text13}>I</span>
              <span className={classes.text14}>N</span>
              <span className={classes.text15}>E</span>
            </Typography>
            <Typography className={classes.big} color="textSecondary">
              ĐA DẠNG - THÔNG MINH - CHÍNH XÁC
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Grid container spacing={3} className={classes.banner_option}>
        {data.map((typedata) => {
          return (
            <React.Fragment key={typedata.id_typedata}>
              <Grid item xs={4}>
                <Card variant="outlined" className={classes.content}>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    variant="h5"
                  >
                    {typedata.type}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {typedata.contentdata}
                  </Typography>
                  <Button variant="contained" color="primary">
                    <Link to={`/main1/${typedata.id_typedata}`}>
                      Hãy làm ngay
                    </Link>
                  </Button>
                </Card>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
}
