import React, { useEffect, useState } from "react";
import gold from "../../img/gold.png";
import "./TopRank.scss";
function TopRank(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const requestUrl = "http://localhost:5000/users";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    }
    fetchUsers();
  }, []);
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
            {users.map(
              (item, index) =>
                item.score > 5 && (
                  <tr key={index}>
                    <td className="left">
                      <img src={gold} alt="" />
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
        <button className="btn btn-seemore">Xem thêm</button>
      </div>
    </div>
  );
}

export default TopRank;
