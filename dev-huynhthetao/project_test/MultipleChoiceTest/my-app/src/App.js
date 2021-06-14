import React, { Component } from 'react';
import Header from "./component/Layout/Header";
import Footer from './component/Layout/Footer';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return ( 
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }  
}

export default App;

// - viết dạng Function Component sử dụng Hook
// - mô phỏng 1 ứng dụng  bài test trắc nghiệm: đăng ký, đăng nhập, và trang test đề thi trắc nghiệm
// - bộ câu hỏi trắc nghiệm lưu trong file JSON
// - lúc bắt đầu bài làm thì pick ngẫu nhiên 10 câu hỏi để user làm
// - submit form để hiển thị kết quả đúng
