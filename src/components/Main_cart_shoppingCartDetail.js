import React,{Component} from 'react';
import {connect} from 'react-redux';
class ShoppingCartDetail extends Component {
    render(){
    let {discount} = this.props;
    let total = countCart(this.props.carts);
    let discountPrice = discount ? parseInt((total+10)*10/100) : 0;
    return (
        <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Phiếu mua hàng </div>
                <div className="p-4">
                <p className="font-italic mb-4">Vận chuyển và bổ sung được tính trên giá trị bạn đã nhập</p>
                <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Đơn hàng </strong><strong>${total}.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Phí vận chuyển</strong><strong>$10.00</strong></li>
                    {discount && <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Giảm giá</strong><strong>10%</strong></li>}
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tổng cộng</strong>
                    <h5 className="font-weight-bold">${total + 10 - discountPrice }.00</h5>
                    </li>
                </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Checkout</a>
                </div>  
        </div>
    
    );
    }
}
function countCart(cart){
    let result = 0;
    if(cart.length > 0){
        cart.forEach((ele, index)=>{
            result += ele.product.price*ele.quantity;
        })
    }
    return result;
}

function mapStateToProps(state){
    return{
        carts: state.Carts,
        discount: state.discount
    }
}
function mapDispatchToProps(dispatch, props){
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDetail);
