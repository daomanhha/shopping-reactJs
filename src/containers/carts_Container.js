import React,{Component} from 'react';
import {connect} from 'react-redux';
import MainCart from './../components/Main_cart';
import MainCartProduct from './../components/Main_cart_products';
import * as actions from './../actions/index';
class CartContainer extends Component{
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
        return(
            <MainCart>
                {renderCarts(this.props.carts, this.props.plushCart, this.props.minusCart, this.props.deleteCart)}
            </MainCart>
        );
    }
}
function renderCarts(Carts, plushCart, minusCart, deleteCart){
    return Carts.map((ele, index)=>{
        return <MainCartProduct cart={ele.product} plushCart={plushCart} minusCart={minusCart} deleteCart={deleteCart} quantity={ele.quantity} key={index}/>
    });
}

function mapStateToProps(state){
    return{
        carts: state.Carts
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        plushCart(cart){
            dispatch(actions.plushCart(cart));
        },
        minusCart(cart){
            dispatch(actions.minusCart(cart));
        },
        deleteCart(cart){
            dispatch(actions.deleteCart(cart));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)