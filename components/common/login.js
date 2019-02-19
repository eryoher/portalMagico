import React, { Component } from 'react'
import { Modal } from 'antd';
import LoginForm from './loginForm';
import CreateUser from '../users/createUser';

export default class Login extends Component {  
    render(){
       
        return(            
            <Modal
                visible={ this.props.showLogin }                
                onCancel = { this.props.onCancelLogin }
                footer={[]}
            >            
                {false&&<LoginForm />}
                <CreateUser />
            </Modal>
            
        )
    }
}
