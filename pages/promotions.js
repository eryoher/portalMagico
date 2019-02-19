import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategoriesWithProduct, getPromotions }  from '../actions';
import { Row, Col, Modal } from 'antd';
import PromotionItem from '../components/promotions/promotionItem'
import CategoryItem from '../components/categories/categoryItem';
import Login from '../components/common/login'

class Promotions extends Component {    

    constructor(props){
        super(props)
        this.state = {
            showLogin:false
        }
    }

    componentWillMount(){
        this.props.getCategoriesWithProduct()
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

    handleSelectCategory = (categoryId) => {
        this.props.getPromotions({
            categoryId:categoryId,
            page:1,
            pageSize:10
        })
    }

    renderCategories(){       
        let { categories } = this.props      
        let rows = []        
        
        categories.data.forEach(category => {
           rows.push(
                <CategoryItem key={category.id}
                    data = { category }
                    onSelecteCategory = {  this.handleSelectCategory }
                />
           ) 
        }); 

        return rows;       
    }

    handleCancelLogin = () =>{
        this.setState({showLogin:false})
    }

    render() {
        const { search, categories } = this.props
        return (
            <div className={'promotions-content'} >
                <div className={'container'} >
                    <Row>
                        <Col>
                            <div className={'title'} >
                                <span className={'color-blue'} > Una marca </span>
                                <span className={'text-bold'} > te premia </span>
                            </div>
                            <div>
                               <a onClick={ () => this.setState({showLogin:true}) } > Login </a>
                            </div>
                        </Col>
                        <Col span={24} className={"list-categories"} >
                            { categories && this.renderCategories() }
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'content'}>
                            <Row>
                                { search && this.renderPromotions() }
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Login 
                            showLogin = { this.state.showLogin }
                            onCancelLogin = { this.handleCancelLogin }
                        />
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ promotions, categories }){
    const {search} = promotions
    return {
        search,
        categories : categories.categoriesCount
    }
}



export default connect (mapStateToProps,{getCategoriesWithProduct, getPromotions})(Promotions);
