import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row,  Col, Button, Layout, Form, message } from 'antd';
import LayoutAdmin from '../components/common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import PromotionFormInput from '../components/promotions/promotionFormInut';
import { formLayout } from '../constants/TypeForm';
import { getPromotion, getCategories, updatePromotion, createPromotion }  from '../actions';
import moment from 'moment-business-days';
import Router from 'next/router'



const { Content } = Layout;

class AdminPromotion extends Component {

    constructor(props){
        super(props);
        this.state = {
            promotionId : null
        }
    }

    componentDidMount() {
        const { location } = window;
        if (location && location.search) {
            const parsedString = qs.parse(location.search.slice(1));
            const promotionId = parsedString.id;
            this.setState({ promotionId });
            this.props.getPromotion(promotionId);
        }
    }

    componentDidUpdate = (prevProps) => {
        if( prevProps.success !== this.props.success ){
            if( this.props.success ){
                message.success(this.props.success.data);
                Router.push('/adminpromotions');
            }
        }
    }

    componentWillMount = () => {
        this.props.getCategories();
    }

    render() {
        const {promotion, listCategories} = this.props;        
        
        const initialValues = {
            donation:null,
            vigencia:[],
            start_time:null,
            end_time:null
        }

        const initial = (this.state.promotionId !== null) ? promotion : initialValues;    
        
        if (initial && initial.start_date  && initial.end_date ) {
            const vigencia = [moment(initial.start_date), moment(initial.end_date)];
            initial.vigencia = vigencia;
        }
        
        if(promotion){            
            initial.start_time = ( initial.start_time ) ? moment(initial.start_time,'HH:mm:ss') : null;
            initial.end_time = (  initial.end_time ) ? moment(initial.end_time, 'HH:mm:ss') : null;
        }

        return (
            <LayoutAdmin>
                <Content className="form-content">
                    <Row style={{ paddingTop: 15 }}>
                        <Col span={20} offset={2}>               
                        { initial && <Formik
                            initialValues = {{...initial}}
                            onSubmit={(values, actions) => {                                                                
                                values.start_time = (values.start_time) ? moment( values.start_time).format('HH:mm:ss') : null;
                                values.end_time = (values.end_time) ? moment( values.end_time ).format('HH:mm:ss') : null;
                                delete values.vigencia;
                                const formData = new FormData();
                                formData.append("all", JSON.stringify(values));  
                                actions.setSubmitting(false);                                
                                if(this.state.promotionId){
                                    this.props.updatePromotion( values.id, formData);
                                }else{
                                    this.props.createPromotion(formData);
                                }                               

                            }}
                            validationSchema={Yup.object().shape({
                                /*name: Yup.string().required('El nombre es requerido'),
                                lastname: Yup.string().required('El apellido es requerido'),
                                username: Yup.string().required('El usuario es requerido'),
                                password: Yup.string().required('El password es requerido'),
                                email:Yup.string().required('El E-mail es requerido'),
                                repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'La contraseñas no coinciden').required('El password es requerido'),*/
                            })}
                            render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Col {...formLayout}>
                                        <PromotionFormInput                     
                                            {...{
                                                values,
                                                handleBlur,
                                                handleChange,
                                                errors,
                                                touched,
                                                isSubmitting,
                                                handleSubmit,
                                                setFieldValue,
                                                setFieldTouched,
                                                listCategories
                                            }}
                                        />
                                    </Col>
                                    <Col span={2} offset={10} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
                                        </Button>
                                    </Col>
                                    <Col span={2}  >
                                        <Button  href={'/adminpromotions'}  className="ant-btn" type={'primary'} >
                                            {'Cancelar'}
                                        </Button>
                                    </Col>
                                </Form>
                            )}
                        />}
                        </Col>
                    </Row>            
                </Content>
            </LayoutAdmin>
        )
    }
}

function mapStateToProps({ promotions, categories }){
    const {search, promotion, success} = promotions
    return {
        search,
        promotion,
        listCategories : (categories.categories) ? categories.categories : [],
        success
    }
}

export default connect (mapStateToProps,{getPromotion, getCategories, updatePromotion, createPromotion})(AdminPromotion);

