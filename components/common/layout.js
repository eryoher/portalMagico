import React, { Component } from 'react'
import { Row, Col } from 'antd';
import HeaderAdmin from './headerAdmin';

export default class Layout extends Component {

    render() {
        const {children} = this.props;
        return (
            <Row>
                <HeaderAdmin />
                <Col span={24} >
                    {children}
                </Col>
            </Row>        
        )
    }
}
