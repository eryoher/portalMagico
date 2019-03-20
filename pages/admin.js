import React, { Component } from 'react'
import { Row } from 'antd';
import HeaderAdmin from '../components/common/headerAdmin';

export default class Admin extends Component {
  render() {
    return (
        <Row>
            <HeaderAdmin showMenu />            
        </Row>
    )
  }
}
