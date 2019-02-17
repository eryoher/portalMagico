import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategories, getPromotions }  from '../actions';
import { Row, Col } from 'antd';
import PromotionItem from '../components/promotions/promotionItem'

class Promotions extends Component {    

    componentWillMount(){
        this.props.getCategories()
        this.props.getPromotions({
            page:1,
            pageSize:10
        })
    }

    renderPromotions(){
        const { search } = this.props
        let rows = []
        search.data.forEach(promotion => {
            rows.push(
                <Col span={8} key={promotion.id} >
                    <PromotionItem 
                        promotion = {promotion}
                    />
                </Col>
            )
        });

        return rows;
    }

    render() {
        const { search } = this.props
        return (
            <div className={'promotions-content'} >
                <div className={'container'} >
                    <Row>
                        <Col>
                            <div className={'title'} >
                                <span className={'color-blue'} > Una marca </span>
                                <span className={'text-bold'} > te premia </span>
                            </div>
                        </Col>
                        <Col className={'content'}>
                            <Row>
                                { search && this.renderPromotions() }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ promotions }){
    const {search} = promotions
    return {
        search
    }
}



export default connect (mapStateToProps,{getCategories, getPromotions})(Promotions);
