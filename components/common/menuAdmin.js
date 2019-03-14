import React, { Component } from 'react';
import Link  from 'next/link'
import { Row, Col, Menu } from 'antd';
import Divider from '../common/divider'

export default class MenuAdmin extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
            collapsed : true,
        };
    }


    render() {
        const logoURL = '../../static/img/logo-header.png';
        return (
            <Row>
                <Col span={4} >
                    <img src={logoURL} />
                </Col>
                <Col span={17} style={{textAlign:'center', top:'3em'}} >
                    <Menu
                        mode="horizontal"
                        className={'menu-container'}
                    >                
                        <Menu.Item key={'home'}>                            
                            <Link href={{ pathname: '/adminpromotions'}}><a>Promociones</a></Link>
                        </Menu.Item>
                    </Menu>
                </Col>                       
            </Row>
        );
    }
}