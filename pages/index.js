import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Carousel, Row, Col, Tabs } from 'antd';
import { Parallax } from "react-scroll-parallax";
import Header from '../components/common/header';
import AllCampaigns from '../components/campaigns/allCampaigns';
import Projects from '../components/projects';
import Promotions from './promotions';
import GiveSmile from '../components/common/give_smile';

class HomePage extends Component {

  renderCarousel(){
    var gallerie = this.props.carousel;
    if (gallerie.length){
      return (
          <Carousel            
            className="presentation-mode"
            autoplay
          >
            {this.divgallerie(gallerie)}
          </Carousel>
        );
    }
  }

  divgallerie(gallerie){
    var rows = [];
    for (var key in gallerie) {
        var picture = gallerie[key];      
        if(picture.active){          
            rows.push(
                <div key={key}>
                    <div className={'banner-img'} style={{backgroundImage: `url(${picture.imgUrl})`}} />              
  
                </div>
            );
        }
    }
    return rows;
  }

  renderAboutus() {
    return(
      
      <div className={"about-us"} >
        <div className={"title"} >
          Acerca de <span className={"color-blue"} >nosotros</span>
        </div>
        <div className={"content"} >
          La mejor posibilidad para cualquier marca o producto de mostrarse como socialmente
          responsable. Asociar marca y producto con una obra que apoya el buen aprovechamiento del tiempo libre de
          los niños hospitalizados, lo que generara en nuestros donantes un gran sentido de relación entre
          nuestra obra y las marcas que forman parte de UNA MARCA TE PREMIA Un buen medio para fidelizar a consumidores.
          Nuestra obra es un excelente canal para fidelizar y generar recordación positiva entre los
          consumidores, ya que los productos y servicios se convierten en motivadores apra que se
          produzcan las donaciones y a cambio podrán recibir grandes beneficios de las diferentes marcas
          aliadas.

          La Fundación no exige ningún porcentaje sobre el dinero que recaude cada bono de descuento
          dentro de Una Marca Te Premia. El dinero de cada bono de descuento ingresa directamente a cada marca por aparte de nuestros
          donantes a la hora de hacerlo efectivo, lo cual garantiza flujo inmediato de dinero apra nuestras marcas aliadas.
        </div>
      </div>
    )
  }

  renderCampaigns(){
    return(
      <div className={"campaign-content  container"}>
        <Row >          
          <Col span={12}>
            <div className={"title text-left"} > <span style={{fontWeight:'bold'}} > Quienes </span> <span className={"color-blue"}> Somos </span></div>
            <AllCampaigns />
          </Col>
          <Col span={12} >
            <img src={"http://localhost/freelance/portalMagicoImagenes/img/campaigns.png"} width={'100%'} />
          </Col>
        </Row>
      </div>
    )

  }
  render() {
    const {campaigns} = this.props
    const bgHeader ="../static/img/header_bg.png";
    const bgBlue = "../static/img/header_bg_blue.png";
    return (
        <div>            
            <div className="homepage-container text-center">
                <Row className={'head'} >
                    <Header />
                </Row>
                <Row>
                    {this.renderCarousel()}
                </Row>
              
                <Row>
                    {this.renderAboutus()}
                </Row>
                <Row>
                    { campaigns && this.renderCampaigns()}
                </Row>
                <Row>
                  <div className={"top-header w-100"} style={{backgroundImage: `url(${bgHeader})`}}  />
                  <Projects />
                </Row>
                <Row style={{marginBottom:'25px'}} >
                  <div className={"top-header w-100"} style={{backgroundImage: `url(${bgHeader})`}}  />
                  <Promotions />
                </Row>
                <Row>
                  <div className={"top-header w-100"} style={{backgroundImage: `url(${bgBlue})`, height:'16px'}}  />
                  
                  <GiveSmile />

                  <div className={"top-header w-100"} style={{backgroundImage: `url(${bgBlue})`, height:'16px'}}  />

                </Row>
            </div>
        </div>
    );
  }
}

function mapStateToProps({carousel, campaigns}){
  return {
    carousel,
    campaigns
  }
}

export default connect (mapStateToProps)(HomePage);
