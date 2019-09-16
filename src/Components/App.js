import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Lists from "./Lists";
import Top from "./Top";


class App extends Component {
  render(){
    return(
      <div>
        <Header list = "dodi terbaik"/>
        <Top />
        <Lists />
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}


export default App;
