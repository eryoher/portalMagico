import React, { Component } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'

import { Row, message } from 'antd';
import HeaderAdmin from '../components/common/headerAdmin';

class Admin extends Component {

  componentDidMount = () => {
    const {auth} = this.props;
    if( !auth.token ||  !auth.user.id ){
      message.error('El usuario debe estar logeado.');
      Router.push('/login');      
    }else if( auth.user.Role.name != 'Administrador' ){
      message.error('El usuario no tiene permisos para este formulario.');
      Router.push('/');      
    }    
  }

  render() {
    return (
        <Row>
            <HeaderAdmin showMenu />            
        </Row>
    )
  }
}

function mapStateToProps({ auth }){  
  return {
    auth
  }
}

export default connect (mapStateToProps,{})(Admin);