import React, { Component } from 'react'
import Menu from './menu';

export default class Header extends Component {
  render() {    
    const bgHeader ="../../static/img/header_bg.png";

    return (
      <div className="header-container">
        <div className={"top-header w-100"} style={{backgroundImage: `url(${bgHeader})`}}  />
        <div className="">
            <Menu />
        </div>
        
      </div>
    )
  }
}
