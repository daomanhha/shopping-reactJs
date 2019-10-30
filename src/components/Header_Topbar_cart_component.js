import React,{Component} from 'react';
export default class CartBarComponent extends Component{
    render(){
        let{cart, quantity, deleteCart} = this.props;
        return(
            <li>
                <a href="#" className="product-image"> <img width="60" height="60" src={cart.img1}/> </a>
                <div className="product-details">
                <div className="close-icon"> <a href="javascript:void(0)" onClick={()=>deleteCart(cart)}><i className="fa fa-close"></i></a> </div>
                <p className="product-name"> <a href="#">{cart.name}</a> </p> <strong>{quantity}</strong> x <span className="price text-primary">${cart.price}</span> </div>
            </li>   
        )
    }
}