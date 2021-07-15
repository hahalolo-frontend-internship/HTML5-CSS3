import React, { useState } from "react";
import "./TopRank.scss";
function TopRank(props) {
  const [seeMore, setSeeMore] = useState(3);
  let arrUser = props.users.sort((a, b) =>
    b.point - a.point === 0 ? a.time - b.time : b.score - a.score
  );

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
            {arrUser.map(
              (item, index) =>
                item.score > 5 &&
                index < seeMore && (
                  <tr key={index} className="top-rank_item">
                    <td className="left">
                      <span>
                        {item.firstname} {item.lastname}
                      </span>
                    </td>
                    <td>{item.score}</td>
                    <td>{item.time}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        {arrUser.length > 3 && seeMore === 3 ? (
          <button className="btn btn-seemore" onClick={() => setSeeMore(10)}>
            Xem thêm
          </button>
        ) : (
          <button className="btn btn-seemore" onClick={() => setSeeMore(3)}>
            Ẩn bớt
          </button>
        )}
      </div>
    </div>
  );
}

export default TopRank;
