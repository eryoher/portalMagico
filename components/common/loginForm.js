import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Alert, Layout, Form, Icon, Input, Button, Row, Col } from 'antd';

import { userSignIn, clearError } from '../../actions';

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends Component {

  render() {

    const { error } = this.props

    return (
      <Layout>
        <Content className="login-container">
          <Content className="form-content">
            <Row>
              <Col span={24} style={{ 'textAlign': 'center' }}>
                
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ 'textAlign': 'center', paddingTop: 15 }} className="title">
                {'Login'}
              </Col>
            </Row>
            <Row style={{ paddingTop: 15 }}>
              <Col span={20} offset={2}>
                {error &&
                  <Alert
                    message={error}
                    type="error"
                  />
                }

                <Formik
                    onSubmit={(values, actions) => {
                        this.props.clearError();
                        this.props.userSignIn(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        //username: Yup.string().required(t('validation-required', { field: t('username') })),
                        //password: Yup.string().required(t('validation-required', { field: t('password') })),
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, isValid, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormItem className={errors.username && touched.username ? 'has-error' : ''}>
                                <Input
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={'Usuario'}
                                />
                                {errors.username &&
                                    touched.username && <div className="ant-form-explain">{errors.username}</div>}
                            </FormItem>
                            <FormItem className={errors.password && touched.password ? 'has-error' : ''}>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={'Password'}
                                />
                                {errors.password &&
                                    touched.password && <div className="ant-form-explain">{errors.password}</div>}
                            </FormItem>
                            <Button className="ant-btn login-form-button" htmlType="submit" disabled={!isValid || isSubmitting}>
                                {'Ingresar'}
                            </Button>
                            <Row style={{ paddingTop: 5, paddingBottom: 35 }}>
                                { <Col span={12}>
                                    <a className="login-form-action" href=""> {'Registrarse'} </a>
                                </Col> }                            
                            </Row>
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

export default connect(mapStateToProps, { userSignIn, clearError })(LoginForm);