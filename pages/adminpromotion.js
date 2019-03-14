import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row,  Col, Button, Layout, Form } from 'antd';
import LayoutAdmin from '../components/common/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as qs from 'qs';
import PromotionFormInput from '../components/promotions/promotionFormInut';
import { formLayout } from '../constants/TypeForm';
import { getPromotion, getCategories }  from '../actions';
import moment from 'moment-business-days';

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

    componentWillMount = () => {
        this.props.getCategories();
    }

    render() {
        const {promotion, listCategories} = this.props;

        const initialValues = {
            donation:null,
            vigencia:[]
        }

        const initial = (this.state.promotionId !== null) ? promotion : initialValues;    
        
        if (initial && initial.start_date !== undefined && initial.end_date !== undefined) {
            const vigencia = [moment(initial.start_date), moment(initial.end_date)];
            initial.vigencia = vigencia;
        }           

        return (
            <LayoutAdmin>
                <Content className="form-content">
                    <Row style={{ paddingTop: 15 }}>
                        <Col span={20} offset={2}>               
                        { initial && <Formik
                            initialValues = {{...initial}}
                            onSubmit={(values, actions) => {
                                console.log(values);
                                
                                //this.props.addUser(values);
                                actions.setSubmitting(false);                                
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
                                    <Col span={24} style={{textAlign:'center'}} >
                                        <Button className="ant-btn" type={'primary'} htmlType="submit">
                                            {'Aceptar'}
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
    const {search, promotion} = promotions
    return {
        search,
        promotion,
        listCategories : (categories.categories) ? categories.categories : []
    }
}

export default connect (mapStateToProps,{getPromotion, getCategories})(AdminPromotion);

