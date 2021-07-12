import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const types = await axios.get("http://localhost:3000/typedata");
      setData(types.data);

    }
    fetchData();
  }, []);

  

  return (
    <main className="main-content">
      <div className="main-content_banner">
        <div className="banner">
          <div className="banner-content">
            <h1>TRẮC NGHIỆM ONLINE</h1>
            <h4>ĐA DẠNG - THÔNG MINH - CHÍNH XÁC</h4>
          </div>
        </div>
        <div className="banner-option">
            {data.map((typedata) => {
              return (
                <React.Fragment key={typedata.id_typedata}>
                <div className="content">
                  <h2>{typedata.type}</h2>
                  <p>{typedata.contentdata}</p>
                  <Link to={`/main1/${typedata.id_typedata}`}
                    className="btn bt-start"
                  >
                    Hãy làm ngay
                  </Link>
                </div>
                </React.Fragment>
              );
            })}
          
        </div>
      </div>
    </main>
  );
}

export default Main;
