import React from 'react';
import Link  from 'next/link'
import { Row, Col, Menu } from 'antd';
import Divider from '../common/divider'
export default class Example extends React.Component {
  
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false,
            collapsed : true,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

  render() {
    const iconTwitter ="../../static/img/logo_twitter.png";
    const iconFacebook = "../../static/img/logo_facebook.png";
    const iconYouTube = "../../static/img/logo_youtube.png";
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
                        Inicio
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Nosotros
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Campañas
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Proyectos
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Aliados
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Regala Sonrisas
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                        Contacto
                    </Menu.Item>
                </Menu>
            </Col>  
            <Col span={3} className={'social-media'} >
                <div className={'icon'} style={{backgroundImage: `url(${iconYouTube})`}} />
                <div className={'icon'} style={{backgroundImage: `url(${iconFacebook})`}} />
                <div className={'icon'} style={{backgroundImage: `url(${iconTwitter})`}} />                
            </Col>          
        </Row>
    );
  }
}