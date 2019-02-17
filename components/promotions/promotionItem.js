import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';

export default class Promotions extends Component {  
    render(){
        const { promotion } = this.props
        let imgUrl 
        console.log(promotion);
        if( promotion.id % 2 == 0 ){
            imgUrl = 'http://localhost:3000/static/img/promotions/green_lantern.jpg'
        }else{
            imgUrl = 'http://localhost:3000/static/img/promotions/superman.jpg'
        }
        return(
            <Row>
                <Col span={22} className={'promotion-item'} style={{backgroundImage: `url(${imgUrl})`}} >
                    <div className={'vertical-space'} />
                    <div className="subcontent">
                            <div className="slogan">
                                <div className={'purchased'} >
                                    { `Comprados: ${promotion.quantity} ` }
                                </div>
                                <div className="valor">
                                    { `Valor: ${promotion.price} ` }
                                </div>           
                                <div className={'deal'}>
                                    { `Ahorra: ${promotion.discount}` }                                        
                                </div>                             
                            </div>
                    </div>
                    <Col className={'sell-button'} > <Button type={'primary'}>Ver mas</Button> </Col>
                </Col>
                <Col span={22} className={'description-item'}>
                    {promotion.description}
                </Col>                
            </Row>
        )
    }
}
