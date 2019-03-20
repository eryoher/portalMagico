import React, { Component } from 'react'
import { smItemLayout, formLayout } from '../../constants/TypeForm';
import { Row, Col, Form, Input, Select, AutoComplete, Button, Divider, DatePicker } from 'antd';
import MP from 'mercadopago';
const FormItem = Form.Item;

var mps = new MP ("TEST-6989747173808942-031217-2e6e01703e7f786b1592f32bf6b42d74-147807596");

export default class BuyPromotion extends Component {

    constructor(props){
        super(props)
        this.state={
            cantidad:1
        }
    }

    renderPay = () => {
        var mp = new MP ("6989747173808942", "Vr3KMuZ4MWX8KvkQuq5hHR0ZCuFumWBF");
        
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

    handleSubmitbuy = () => {
        const {promotion, auth} = this.props;
        const { user } = auth;
        
        var preference = {
            items: [
              {
                id: promotion.id,
                title: (promotion.name) ? promotion.name: 'Promocion Nombre' ,
                quantity: parseInt( this.state.cantidad ),
                currency_id: 'COP',
                unit_price: promotion.price
              }
            ],
            payer: {
              email: 'eryoher@gmail.com',
              name: user.name,
              surname: user.username,
              phone:{
                  number: parseInt(user.phone)
              }
            },
            back_urls: {
                "success": "http://locahost:3000/promotions",
                "failure": "http://localhost:3000",                
            },
            auto_return: "approved",               
            external_reference: `promotion_${promotion.id}` ,
            binary_mode: true
        };             
               
        this.props.onCreatePreference( preference );

        this.props.onCancelPay();
        
    }

    render() {
        const {promotion, auth} = this.props;
        const {user}  = auth;
        const {cantidad} = this.state;
        return (
            <Row className={'buyPromotion-content'} style={{backgroundImage: `url('../../static/img/bg_modal_buy.png')`}} >
                <Divider><h3>Datos del Usuario </h3></Divider>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Nombre'}
                    >
                        { `${user.name} ${user.lastname}` }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Correo'}
                    >
                        { user.email }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Telefono'}
                    >
                        { user.phone }
                    </FormItem>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Ciudad'}
                    >
                        { user.city }
                    </FormItem>
                <Divider><h3>Datos de la Promocion</h3></Divider>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Precio'}
                    >
                        { promotion.price.toLocaleString() }
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
                            placeholder={'Ingrese la Cantidad'}
                            className={'input-form-login'}
                            value={cantidad}
                            onChange={(event) => {                                
                                this.setState({cantidad:event.target.value})
                            }}
                            
                        />
                        
                    </FormItem>
                </Col>
                <Col {...formLayout}>
                    <FormItem
                        {...smItemLayout}                    
                        label={'Total'}
                    >
                        { (promotion.price * cantidad).toLocaleString() }
                    </FormItem>
                </Col>
                <Col span={24} style={{textAlign:'center'}} >
                    <Button onClick={this.handleSubmitbuy}  htmlType="button" className={"button-buypromotion"}  disabled={ !(cantidad > 0) }>
                        {'Confirmar'}
                    </Button>
                </Col>
            </Row>
        )
    }


}
