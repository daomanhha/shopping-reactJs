import React,{Component} from 'react';
import MainDetailProductComponent from './Main_detail_product_Component';
import {connect} from 'react-redux';

class MainDetailProduct extends Component{
    componentDidMount () {
        let script = document.createElement("script");
        script.src = "./js/myJs3.js";
        script.async = true;
        document.body.appendChild(script);
    }
    componentWillUnmount(){
        let script = document.querySelector("script[src='./js/myJs3.js']")
        if(script){
            script.remove();
        }
    }
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