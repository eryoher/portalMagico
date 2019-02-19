import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Row, Col, Form, Input, Select, AutoComplete, Button, Divider, DatePicker } from 'antd';
const FormItem = Form.Item;
import { formLayout, fullItemLayout } from '../../constants/TypeForm';



class UserFormInput extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, search, isSubmitting, disabled } = this.props;

        return (
        <Row>
            <Col span={24}>
                <Row>                    
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.name && touched.name ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                placeholder={'Nombre'}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && <div className="ant-form-explain">{errors.name}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.lastname && touched.lastname ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="lastname"
                                type="text"
                                name="lastname"
                                placeholder={'Apellido'}
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastname && touched.lastname && <div className="ant-form-explain">{errors.lastname}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.username && touched.username ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="username"
                                type="text"
                                name="username"
                                placeholder={'Usuario'}
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username && <div className="ant-form-explain">{errors.username}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.city && touched.city ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="city"
                                type="text"
                                name="city"
                                placeholder={'Ciudad'}
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.city && touched.city && <div className="ant-form-explain">{errors.city}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.phone && touched.phone ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder={'Telefono'}
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phone && touched.phone && <div className="ant-form-explain">{errors.phone}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.email && touched.email ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder={'E-mail'}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <div className="ant-form-explain">{errors.email}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.password && touched.password ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder={'Contraseña'}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && <div className="ant-form-explain">{errors.password}</div>}
                        </FormItem>
                    </Col>
                    <Col {...formLayout}>
                        <FormItem
                            {...fullItemLayout}
                            className={errors.repeatPassword && touched.repeatPassword ? 'has-error' : ''}
                            label={false}
                        >
                            <Input
                                id="repeatPassword"
                                type="password"
                                name="repeatPassword"
                                placeholder={'Repita la contraseña'}
                                value={values.repeatPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.repeatPassword && touched.repeatPassword && <div className="ant-form-explain">{errors.repeatPassword}</div>}
                        </FormItem>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
        )
    }
}

const mapStateToProps = ({ auth }) => {
  
    return { auth };

};



export default connect(mapStateToProps, {})(UserFormInput);

