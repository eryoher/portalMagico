import React, { Component } from 'react'
import Countdown from 'react-countdown-now';
import { Col, Tabs , Button, Modal} from 'antd';
import Login from '../common/login';
import BuyPromotion from '../payments/buyPromotion';
const TabPane = Tabs.TabPane;
const MP = require('mercadopago');

export default class PromotionDetail extends Component {    

    constructor(props){
        super(props);
        this.state = {
            showLogin : false,
            showPay:false
        }
    }

    renderListImg = () => {

        const listImages = [
            {
                name:"nombre 1",
                url: "http://localhost/freelance/portalMagicoImagenes/img/promotion_list_1.png"
            },
            {
                name:"nombre 2",
                url: "http://localhost/freelance/portalMagicoImagenes/img/promotion_list_2.png"
            },
            {
                name:"nombre 3",
                url: "http://localhost/freelance/portalMagicoImagenes/img/promotion_list_3.png"
            }
        ]

        let rows = [];
        
        listImages.forEach( item => {
            rows.push(
                <div key={item.name} className={"list"} style={{backgroundImage: `url(${item.url})`}} />
            )
        });

        return rows;
    }


    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return false;
        } else {
          // Render a countdown
          seconds = (seconds<10) ? `0${seconds}` : seconds;
          minutes = (minutes<10) ? `0${minutes}` : minutes;
          hours = (hours<10) ? `0${hours}` : hours;
          days = (days<10) ? `0${days}` : days;

          return <span className={"time"}> <span className={"interval"}>{days}</span>:<span className={"interval"}>{hours}</span>:<span className={"interval"}>{minutes}</span>:<span className={"interval"}>{seconds}</span> </span>;
        }
    }

    handleCallPaid = () => {
        
        const token = localStorage.getItem('token')
        if(!token){            
            this.setState({showLogin:true})         
        }else{
           this.setState({showPay:true})

        }
    }

    handleCancelLogin = () => {
        this.setState({showLogin:false});
    }

    handleCancelPay = () => {
        this.setState({showPay:false});
    }

    handleShowLogin = () => {
        this.setState({showLogin:true});
    }

    render() {
        const {promotion} = this.props
        const urlImage = "http://localhost/freelance/portalMagicoImagenes/img/promotion_1.png";
        const endDate = new Date(promotion.end_date);
        
        return (
            <Col>
                <Tabs defaultActiveKey="1">
                    <TabPane key={1} tab={'La oferta'} >
                        <Col span={20} offset={2} className={"promotion-images"} >
                            <Col className={"main-image"} style={{backgroundImage: `url(${urlImage})`}} />
                            <Col className={"list-images"} >
                                {this.renderListImg()}
                            </Col>
                            <Col className={"description"} >
                                {promotion.description}
                            </Col>
                            <Col span={24} className={"time-promotion"} >
                                <img className={"img-clock"} src={"../../static/img/clock.png"} />
                                <span className={"message"}>Tiempo Restante </span>
                                <Countdown date={endDate.getTime()} renderer={this.renderer} />
                            </Col>
                            <Col span={24} className={"div-botton-donate"} >
                                <Button className={"botton-donate"} onClick={ () => this.handleCallPaid() } > DONAR YA </Button>
                                
                            </Col>
                            <Login 
                                showLogin = { this.state.showLogin }
                                onCancelLogin = { this.handleCancelLogin }
                                onShowLogin = { this.handleShowLogin }
                            />
                            { this.state.showPay &&
                                <Modal
                                    visible={ this.state.showPay }                
                                    onCancel= { () => this.handleCancelPay() }
                                    footer={[]}
                                >  
                                    <BuyPromotion 
                                        promotion = { promotion }
                                    />

                                </Modal>


                            }
                        </Col>
                    </TabPane>
                    <TabPane key={2} tab={'Condiciones'}>

                    </TabPane>
                    <TabPane key={3} tab={'Localizacion'}>

                    </TabPane>
                </Tabs>      
            </Col>
        )
    }
}
