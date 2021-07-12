import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./main1.css";

function Main1(props) {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const types = await axios.get(
          `http://localhost:3000/typedata?id_typedata=${id}`
        );

        setData(types?.data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <main className="main-content">
        <div className="breadcrumb">
          <nav className="container">
            <ol>
              <li className="breadcrumb-item">Trang chủ</li>
              <li className="breadcrumb-item">/ {data.type}</li>
            </ol>
          </nav>
        </div>
        <div className="advertisement container">
          <div className="advertisement-all advertisement-left">
            <h1>Đề thi trắc nghiệm</h1>
            <div className="advertisement-class">
              <h3>B1: Chọn lớp và môn học</h3>
              <div className="advertisement-option-all">
                <div className="advertisement-option-left">
                  <select defaultValue="">
                    <option value="lop-10">Lớp 10</option>
                    <option value="lop-9">Lớp 9</option>
                    <option value="lop-8">Lớp 8</option>
                    <option value="lop-7">Lớp 7</option>
                    <option value="lop-6">Lớp 6</option>
                  </select>
                </div>
                <div className="advertisement-option-item">
                  <select defaultValue="">
                  <option value="tieng-anh">Tiếng Anh</option>
                    <option value="toan-hoc">Toán</option>
                    <option value="vat-ly">Vật Lý</option>
                    <option value="hoa-hoc">Hóa Học</option>
                    <option value="sinh-hoc">Sinh Học</option>
                    <option value="ngu-van">Ngữ Văn</option>
                   
                    <option value="lich-su">Lịch Sử</option>
                    <option value="dia-ly">Địa Lý</option>
                    <option value="gdcd">GDCD</option>
                    <option value="cong-nghe">Công Nghệ</option>
                    <option value="tin-hoc">Tin Học</option>
                    <option value="giao-duc-quoc-phong">
                      Giáo dục quốc phòng
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="advertisement-topic">
              <h3>B2: Loại đề</h3>
              <div className="advertisement-poin">
                <div className="advertisement-topic_poin">
                  <h4>Đề thi giữa học kỳ, học kỳ</h4>
                  <p>50 câu / 60'</p>
                </div>
                <div className="advertisement-topic_poin">
                  <h4>Đề kiểm tra 1 tiết</h4>
                  <p>30 câu / 45''</p>
                </div>
                <div
                  className="advertisement-topic_poin advertisement-topic_poin-fixed"
                  // onChange={onChange}
                >
                  <h4>Đề kiểm tra 15 phút</h4>
                  <p>10 câu / 15'</p>
                </div>
              </div>
            </div>
            <div className="advertisement-topic">
              <h3>B3: Chọn nội dung</h3>
              <p>
                Các em có thể chọn 1 hoặc nhiều nội dung của các chương để hệ
                thống tự tổng hợp ngẫu nhiên thành ma trận đề kiểm tra cho các
                em
              </p>
              <div className="advertisement-option-right">
                <div className="advertisement-item">
                  <input type="checkbox"/>
                  <span>Ngữ pháp tiếng anh</span>
                  <button>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="advertisement-item">
                  <input type="checkbox" />
                  <span>Từ vựng tiếng anh</span>
                </div>
                <div className="advertisement-item">
                  <input type="checkbox" />
                  <span>Tiếng anh THPT quốc gia</span>
                </div>
              </div>
            </div>
            <div className="main-btn-bottom">
              <Link to={`/main1/${id}/main2`} className="bt-startnew">
                Bắt đầu làm bài
              </Link>
            </div>
          </div>
          <div className="advertisement-section_one">
            <h2>Bảng thống kê</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main1;
