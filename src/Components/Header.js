import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list
    };
    this.handlePesan = this.handlePesan.bind(this);
  }

handlePesan(){
  alert(this.state.daftar);
}

    render(){
      return(
        <div>
          <h2>Makanan khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.props.list}</p>
          <a href="/" onClick={this.handlePesan}>
            Halman Header
          </a>
        </div>
      );
    }
  }

  export default Header;