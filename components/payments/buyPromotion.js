import React, { Component } from 'react'
import { smItemLayout, formLayout } from '../../constants/TypeForm';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Divider, DatePicker } from 'antd';
const FormItem = Form.Item;
export default class BuyPromotion extends Component {

    renderPay = () => {
        var mp = new MP ("6989747173808942", "Vr3KMuZ4MWX8KvkQuq5hHR0ZCuFumWBF");
        var mps = new MP ("TEST-6989747173808942-031217-2e6e01703e7f786b1592f32bf6b42d74-147807596");
        
        var preference = {
            items: [
              {
                id: '1234',
                title: 'Prueba Primer pago',
                quantity: 3,
                currency_id: 'COP',
                unit_price: 5500
              }
            ],
            payer: {
              email: 'eryoher@gmail.com'
            },
            back_urls: {
                "success": "http://www.google.com.co",
                "failure": "http://www.google.com.co",
                "pending": "https://www.google.com.co"
            },
            auto_return: "approved",               
            external_reference: "promotion_1234",
            binary_mode: true
          };

         
        mps.preferences.create(preference)
            .then(function (preference) {
              // Do something if preference has been created successfully
              console.log('funciona', preference);
              
            }).catch(function (error) {
              // If an error has occurred
              console.log('obvio error', error);
              
            }
        );
    }

    render() {
        const {promotion} = this.props;
        return (
            <Row>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Precio'}
                    >
                        { promotion.price }
                    </FormItem>
                </Col>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Cantidad'}
                    >
                        <Input
                            id="name"
                            type="number"
                            name="name"
                            placeholder={'Nombre *'}
                            className={'input-form-login'}
                            value={1}
                            onChange={(event) => {
                                console.log(event.target.value);
                                
                            }}
                            
                        />
                    </FormItem>
                </Col>
            </Row>
        )
    }
}
