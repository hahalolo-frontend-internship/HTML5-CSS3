import {
  Card,
  Button,
  makeStyles,
  CardMedia,
  Typography,
  CardContent,
  TableRow,
  TableCell,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  rank:{
   
    border:'1px solid',
    marginTop:'32px',
    borderRadius: '15px',
    padding:'25px',
    textAlign:"center"
  },
}));

function Rank() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/charts");
      setData(result.data);
    }
    fetchData();
  }, []);

  // const [chart, setChart] = useState("");

  //   const arr = data.find(function(css, index){
  //     return css.point === "500";
  //   });
  // console.log(arr.name);
  //     // setChart(arr.point);

  /////
  // const data = [{id_charts: 1, name: "quy", point: "500"},
  // {id_charts: 2, name: "quy123", point: "700"},
  // {id_charts: 3, name: "quy1234", point: "20"},]
  // const a = [];
  // // const arr = data.forEach(function (user) {
  // //     console.log(user.point);
  // //   a.push(user.point, user.name);
  // //   console.log(a);
  // //   a.sort();
  // //   console.log(a);
  // //   // const ars = a.
  // // });
  // data.sort();
  // console.log(data);
  const classes = useStyles();


  return (
    <>
      <Card className={classes.rank}>
        {/* bo thang card header vo day  */}
        <CardMedia>
          <Typography variant="h3">Bảng xếp hạng</Typography>
        </CardMedia>

        <CardMedia>
          <Typography variant="h5">Top Sort / {data.length}</Typography>
        </CardMedia>

        <CardMedia>
          <Typography variant="body2">
            {data.map((charts) => {
              return (
                <React.Fragment key={charts.id_charts}>
                  <Card>
                    <TableRow>
                      <TableCell>{charts.id_charts}</TableCell>
                      <TableCell>{charts.name}</TableCell>
                      <TableCell align="right">{`${charts.point} point`}</TableCell>
                      <TableCell align="right">{charts.time}</TableCell>
                    </TableRow>
                  </Card>
                </React.Fragment>
              );
            })}
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography>Bạn có muốn chinh phục?</Typography>
        </CardContent>
        <CardContent>
          <Button variant="contained" color="secondary">
            Có tôi muốn
          </Button>
        </CardContent>
        <CardContent>
          <Button
            href="https://www.facebook.com/"
            target="_blank"
            variant="contained"
            color="primary"
          >
            Chia sẻ FaceBook
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default Rank;
