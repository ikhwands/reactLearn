import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Lists from "./Lists";


class App extends Component {
  render(){
    return(
      <div>
        <Header list = "dodi terbaik"/>
        <Lists />
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}


export default App;
