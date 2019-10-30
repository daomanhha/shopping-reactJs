import React,{Component} from 'react';


class MainCartProduct extends Component {
    render(){
        let {cart , quantity} = this.props;
    return (
        <tr>
            <th scope="row" className="border-0">
            <div className="p-2">
                <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                <div className="ml-3 d-inline-block align-middle">
                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{cart.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Iphone</span>
                </div>
            </div>
            </th>
            <td className="border-0 align-middle"><strong>{cart.price}$</strong></td>
            <td className="border-0 align-middle">
            <div className="d-flex">
                <strong>{quantity}</strong>
                <div className="button-change-quantity d-flex-quantity">
                <button type="button">+</button>
                <button type="button">-</button>
                </div>
            </div>
            </td>
            <td className="border-0 align-middle"><strong>{cart.price*quantity}$</strong></td>
            <td className="border-0 align-middle">
            <button type="button" className="btn-delete-fixed btn-outline-danger-fixed btn-xs">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            </td>
        </tr>                      
        );
    }
}

export default MainCartProduct;
