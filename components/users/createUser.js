import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Layout, Form, Button, Row, Col } from 'antd';
import { addUser } from '../../actions';
import { formLayout } from '../../constants/TypeForm';
import UserFormInput from './userFormInput';

const { Content } = Layout;


class CreateUser extends Component {

  render() {

    const { error } = this.props

    return (
      <Layout>
        <Content className="login-container">
          <Content className="form-content">
            <Row style={{ paddingTop: 15 }}>
              <Col span={20} offset={2}>               
                <Formik
                    onSubmit={(values, actions) => {
                        //this.props.addUser(values);
                        actions.setSubmitting(false);
                        console.log(values);
                        
                    }}
                    validationSchema={Yup.object().shape({
                        //username: Yup.string().required(t('validation-required', { field: t('username') })),
                        //password: Yup.string().required(t('validation-required', { field: t('password') })),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Col {...formLayout}>
                                <UserFormInput                          
                                    {...{
                                        values,
                                        handleBlur,
                                        handleChange,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched
                                    }}
                                />
                            </Col>
                            <Button className="ant-btn login-form-button" htmlType="submit" disabled={!isValid || isSubmitting}>
                                {'Enviar'}
                            </Button>
                        </Form>
                    )}
                />
              </Col>
            </Row>            
          </Content>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = ({auth}) => {
    return { auth }  
};

export default connect(mapStateToProps, { addUser })(CreateUser);