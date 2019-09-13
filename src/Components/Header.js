import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list
    };
  }
    render(){
      return(
        <div>
          <h2>Makanan khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.props.list}</p>
        </div>
      );
    }
  }

  export default Header;