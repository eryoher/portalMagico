import React, { Component } from 'react'
import { Row, message } from 'antd';
import Layaout from '../components/common/layout';
import { connect } from 'react-redux';
import {createGiftCard, createTokenCard} from '../actions'
import { Button } from 'antd/lib/radio';

class ConfirmationPay extends Component {

  constructor(props){
    super(props);
  }
  
  componentWillMount(){
    const {tokenCard} = this.props;
    if( !tokenCard ){
      this.props.createTokenCard();    
    }
  }

  componentDidUpdate = ( prevProps ) =>{
    if( !prevProps.giftCard && prevProps.giftCard !== this.props.giftCard ) {
      message.success( this.props.giftCard.message );
      
    }
  }

  handleCreateGiftCard = () => {
    const {tokenCard} = this.props;
    
    const dataCard = {
      phone_number:3127714046,
      country_code:'+57',
      email:"eryoher@gmail.com",
      first_name:"Ericson Yohany",
      last_name:"Hernandez",
      amount:5000,
      kind:"N",
      currency:"COP"
    }   
    
    this.props.createGiftCard(dataCard, tokenCard);
  }


  render() {
    const {tokenCard, giftCard} = this.props;
    const disabled = (giftCard) ? true:false;
    return (
        <Row>
          <Layaout>
            { tokenCard && <Button onClick={this.handleCreateGiftCard}  htmlType="button" disabled={ disabled } >
             {'Redimir Code'}
            </Button>}
          </Layaout>
        </Row>
    )
  }
}

function mapStateToProps({ payments }){
  const {tokenCard, giftCard} = payments;
  return {
      tokenCard,
      giftCard
  }
}

export default connect (mapStateToProps,{ createGiftCard, createTokenCard })(ConfirmationPay);
