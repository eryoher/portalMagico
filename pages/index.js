import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Carousel, Row, Col, Tabs } from 'antd';
import { Parallax } from "react-parallax";
import Header from '../components/common/header';
import AllCampaigns from '../components/campaigns/allCampaigns';
import Projects from '../components/projects';

class HomePage extends Component {

  renderCarousel(){

    var gallerie = this.props.carousel;
    
    if (gallerie.length){
      return (
          <Carousel            
            className="presentation-mode"
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
                    <div className={'banner-img'} style={{backgroundImage: `url(${picture.imgUrl})`}} >                
                        {picture.slogan}
                    </div>
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
              enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
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
    return (
        <div>
            <Parallax strength={500}>
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
                      <Projects />
                    </Row>
                </div>
            </Parallax>            
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
