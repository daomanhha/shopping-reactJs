import React,{Component} from 'react';
import MainDetailProductComponent from './Main_detail_product_Component';
import {connect} from 'react-redux';

class MainDetailProduct extends Component{
    render(){
        let {match,Products} = this.props;
        return(
            <main>
                <section class="detail-products">
                    <div class="container">
                        {renderDetailComponent(Products, parseInt(match.params.id))}
                    </div>
                </section>
            </main>   
        );
    }
}

function renderDetailComponent(Products, id){
    return Products.filter((ele,index)=>{
        return ele.id === id;
    }).map((ele,index)=>{
        return <MainDetailProductComponent key={index} product={ele}/> ;
    })
}

function mapStateToProps(state){
    return{
        Products: state.Products
    }
}
function mapDispatchToProps(dispatch, props){
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainDetailProduct);