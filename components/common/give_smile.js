import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class GiveSmile extends Component {
    render() {
        return (
            <Row className={"smile-content"}>
                <Col span={24} className={"title"} >
                    Regala <span className={"color-blue"} > Sonrisas </span>
                </Col>
                <Col offset={2} span={20} className={"content"} >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                </Col>
                <Col offset={2} span={18} className={"columns"} >
                    <Col span={7} offset={1} >
                        Lorem ipsum dolor sit
                        amet,consectetuer 
                        adipiscing elit. Aenean
                        commodo ligula eget
                        dolor. Aenean massa.
                        Cum sociis natoque
                        penatibus et magnis dis
                    </Col>
                    <Col span={7} offset={1}>
                        Lorem ipsum dolor sit
                        amet,consectetuer 
                        adipiscing elit. Aenean
                        commodo ligula eget
                        dolor. Aenean massa.
                        Cum sociis natoque
                        penatibus et magnis dis
                    </Col>
                    <Col span={7} offset={1}  >
                        Lorem ipsum dolor sit amet,consectetuer 
                        adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa.
                        Cum sociis natoque
                        penatibus et magnis dis
                    </Col>

                </Col>                
            </Row>
        )
    }
}
