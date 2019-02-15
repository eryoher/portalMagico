import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategories }  from '../actions';

class Promotions extends Component {    

    componentWillMount(){
        this.props.getCategories()
    }

    render() {
        return (
            <div className={'promotions-content'} >
                <div className={'container'} >
                    <div className={'row'}>
                        <div className={'col'}>
                            <div className={'title'} >
                                <span className={'color-blue'} > Una marca </span>
                                <span className={'text-bold'} > te premia </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ projects }){
    return {
        projects
    }
}



export default connect (mapStateToProps,{getCategories})(Promotions);
