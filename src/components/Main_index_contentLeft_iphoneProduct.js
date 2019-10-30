import React,{Component} from 'react';
import {Link} from "react-router-dom";

export default class IphoneProduct extends Component{
    render(){
        let {product, addToCarts} = this.props;
        return (
            <div className="col-lg-3 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <div className="product-grid2">
                        <div className="product-image2">
                            <Link to={`./product/${product.id}`}>
                                <img className="pic-1" src={product.img1}/>
                                <img className="pic-2" src={product.img2}/>
                            </Link>
                            <ul className="social">
                                <li><a href="#" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                                <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <a className="add-to-cart" href="">Add to cart</a>
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">20%</span>
                        </div>
                        </div>  
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" href="javascript:void(0)" onClick={()=>addToCarts(product)} data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>          
        )
    }
}