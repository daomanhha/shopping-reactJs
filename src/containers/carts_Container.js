import React,{Component} from 'react';
import {connect} from 'react-redux';
import MainCart from './../components/Main_cart';
import MainCartProduct from './../components/Main_cart_products';
class CartContainer extends Component{
    render(){
        return(
            <MainCart>
                {renderCarts(this.props.carts)}
            </MainCart>
        );
    }
}
function renderCarts(Carts){
    return Carts.map((ele, index)=>{
        return <MainCartProduct cart={ele.product} quantity={ele.quantity} key={index}/>
    });
}

function mapStateToProps(state){
    return{
        carts: state.Carts
    }
}

function mapDispatchToProps(dispatch, props){
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)