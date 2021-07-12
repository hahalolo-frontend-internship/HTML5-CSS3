import React from 'react'

function Footer () {
   return (
      <footer className="footer">
      <h1>Trắc Nghiệm</h1>
      <div className="footer-nav">
        <div className="footer-nav-right">
          <h3>
            Thi THPT Quốc Gia 
          </h3>
          <li>Bằng lái xe máy / môtô</li>
          <li>Thi Công / Viên chức</li>
          <li>Bằng lái ô tô</li>
        </div>
        <div className="footer-nav-right">
          <h3>
            Đề Kiểm Tra
          </h3>
          <li>Đề thi học kì 1, 2</li>
          <li>Đề kiểm tra 1 tiết</li>
          <li>Đề kiểm tra 15 phút</li>
         
        </div>
        <div className="footer-nav-right">
          <h3>
            ENGLISH TEST
          </h3>
          <li>Ngữ pháp tiếng anh</li>
          <li>Từ vựng tiếng anh</li>
          <li>Tiếng anh THPT quốc gia</li>
        </div>
      </div>
      <div className="copyright">Copyright © 2020 by Tracnghiem.net</div>
    </footer>
   )
}

export default Footer
