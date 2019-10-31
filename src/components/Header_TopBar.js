import React,{Component} from 'react';
import CartBarComponent from './Header_Topbar_cart_component';
import { Link} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class HeaderTopBar extends Component{
    render(){
        let{carts, deleteCart} = this.props;
        return(
            <nav className="topBar">
                <div className="container">
                    <ul className="list-inline pull-left hidden-sm hidden-xs">
                    <li><span className="text-primary">Have a question? </span> Call +120 558 7885</li>
                </ul>
                    <ul className="topBarNav pull-right">
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="false"> <i className="fa fa-usd mr-5"></i>VND<i className="fa fa-angle-down ml-5"></i>
                        </a>
                        <ul className="dropdown-menu w-100" role="menu">
                            <li><a href="#"><i className="fa fa-eur mr-5"></i>EUR</a>
                            </li>
                            <li className=""><a href="#"><i className="fa fa-usd mr-5"></i>USD</a>
                            </li>
                            <li><a href="#"><i className="fa fa-gbp mr-5"></i>GBP</a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="false"> <img src="http://diamondcreative.net/plus-v1.2/img/flags/flag-french.jpg" className="mr-5" alt=""/> <span className="hidden-xs"> Vienamese <i className="fa fa-angle-down ml-5"></i></span> </a>
                        <ul className="dropdown-menu w-100" role="menu">
                            <li>
                            <a href="#"><img src="http://diamondcreative.net/plus-v1.2/img/flags/flag-english.jpg" className="mr-5" alt=""/>English</a>
                            </li>
                            <li className="">
                            <a href="#"><img src="http://diamondcreative.net/plus-v1.2/img/flags/flag-french.jpg" className="mr-5" alt=""/>French</a>
                            </li>
                            <li>
                            <a href="#"><img src="http://diamondcreative.net/plus-v1.2/img/flags/flag-german.jpg" className="mr-5" alt=""/>German</a>
                            </li>
                            <li>
                            <a href="#"><img src="http://diamondcreative.net/plus-v1.2/img/flags/flag-spain.jpg" className="mr-5" alt=""/>Spain</a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="false"> <i className="fa fa-user mr-5"></i><span className="hidden-xs">Tài Khoản<i className="fa fa-angle-down ml-5"></i></span> </a>
                        <ul className="dropdown-menu w-150" role="menu">
                            <li><a href="login.html">Đăng nhập</a>
                            </li>
                            <li><a href="register.html">Tạo Tài Khoản</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="wishlist.html">Wishlist (5)</a>
                            </li>
                            <li><a href="cart.html">Cart</a>
                            </li>
                            <li><a href="checkout.html">Checkout</a>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="false"> 
                            <i className="fa fa-shopping-basket mr-5"></i> <span className="hidden-xs">
                                                Cart
                                <sup className="text-primary red--cl">({carts.length})</sup>
                            <i className="fa fa-angle-down ml-5"></i>
                            </span> </a>
                        <ul className="dropdown-menu cart w-250" role="menu">
                            <li>
                            <div className="cart-items">
                                <ol className="items">
                                    {
                                        renderCartComponent(carts, deleteCart)
                                    }                                      
                                </ol>
                            </div>
                            </li>
                            <li>
                            <div className="cart-footer">
                                <Link className="pull-left" to="/cart">
                                    <i className="fa fa-cart-plus mr-5"></i>ViewCart
                                </Link>
                                <a href="#" className="pull-right"><i className="fa fa-shopping-basket mr-5"></i>Checkout</a> 
                            </div>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function renderCartComponent(carts, deleteCart){
    return carts.map((ele,index)=>{
        return <CartBarComponent key={index} deleteCart={deleteCart} cart={ele.product} quantity={ele.quantity} />
    })
}
function mapStateToProps(state){
    return{
        carts: state.Carts
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        deleteCart(cart){
            dispatch(actions.deleteCart(cart));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTopBar)
