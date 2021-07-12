import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./rank.css";

function Rank() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/charts");
      setData(result.data);
      console.log(data)
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

  return (
    <>
      <div className="advertisement-all advertisement-table">
        <h2>Bảng xếp hạng</h2>
        <div className="advertisement-all-top">
          <h2>Top Sort / {data.length} </h2>
          <div className="advertisement-all-bottom">
               {data.map((charts) => {
              return (
                <React.Fragment key={charts.id_charts}>
                <div className="advertisement-all-bottom">
                  <div className="advertisement-all-bottom_item name">
                  <p>{charts.name}</p>
                  <p>{charts.point} point</p>
                  <p>Time</p>
                  </div>
                </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="contact">
          <p> Bạn có muốn chinh phục?</p>
        </div>
        <div className="contact">
          <button className="btn btn-qs">Có tôi muốn</button>
        </div>
        <div className="contact">
          <Link to="https://www.facebook.com/" target="_blank">
            <button className="btn btn-fb">Chia sẻ FaceBook</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Rank;
