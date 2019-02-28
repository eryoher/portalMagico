import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPromotion }  from '../actions';
import { Row, Col, Modal } from 'antd';
import * as qs from 'qs';

class Promotions extends Component {    

    constructor(props){
        super(props)
        this.state = {
            promotionId:null
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

    render() {
        return (
           <div>hola mundo</div>
        )
    }
}

function mapStateToProps({ promotions }){
    const {search} = promotions
    return {
        search        
    }
}



export default connect (mapStateToProps,{getPromotion})(Promotions);
