import React from "react";
import gold from "../../img/gold.png";
import silver from "../../img/silver.png";
import bronze from "../../img/bronze.png";
import "./TopRank.scss";
function TopRank(props) {
  return (
    <div className="top-rank">
      <div className="top-rank_head">Top lượt thi</div>
      <div className="top-rank_body">
        <table>
          <tbody>
            <tr>
              <th className="left">Tên</th>
              <th>Điểm</th>
              <th>Thời gian</th>
            </tr>
            <tr>
              <td className="left">
                <img src={gold} alt="" />
                <span> Trịnh Công A</span>
              </td>
              <td>8</td>
              <td>5:00</td>
            </tr>
            <tr>
              <td className="left">
                <img src={silver} alt="" />
                <span> Phan Văn B</span>
              </td>
              <td>7</td>
              <td>5:30</td>
            </tr>
            <tr>
              <td className="left">
                <img src={bronze} alt="" />
                <span> Trần Đình C</span>
              </td>
              <td>6</td>
              <td>6:00</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-seemore">Xem thêm</button>
      </div>
    </div>
  );
}

export default TopRank;
