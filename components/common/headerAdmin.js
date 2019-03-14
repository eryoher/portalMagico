import React, { Component } from 'react'
import MenuAdmin from './menuAdmin';

export default class HeaderAdmin extends Component {
  render() {    
    const bgHeader ="../../static/img/header_bg.png";

    return (
      <div className="header-container">
        <div className={"top-header w-100"} style={{backgroundImage: `url(${bgHeader})`}}  />
        <div className="">
            <MenuAdmin />
        </div>
        
      </div>
    )
  }
}
