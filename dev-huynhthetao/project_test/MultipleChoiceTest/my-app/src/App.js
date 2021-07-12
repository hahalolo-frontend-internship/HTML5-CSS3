import React, { Component } from 'react';
import Header from "./component/Layout/Header";
import Footer from './component/Layout/Footer';

class App extends Component {
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
