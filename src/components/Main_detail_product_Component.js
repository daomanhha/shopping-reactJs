import React,{Component} from 'react';

class MainDetailProductComponent extends Component{
    render(){
        let {product} = this.props;
        return(
            <div className="card">
                <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">
                    <div className="preview-pic tab-content">
                        <div className="tab-pane active"  id="pic-1"><img width="460" height="290" src={product.img1} /></div>
                        <div className="tab-pane" id="pic-2"><img width="460" height="290" src={product.img2} /></div>
                        <div className="tab-pane" id="pic-3"><img width="460" height="290" src={product.img3} /></div>
                        <div className="tab-pane" id="pic-4"><img width="460" height="290" src={product.img4} /></div>
                        <div className="tab-pane" id="pic-5"><img width="460" height="290" src={product.img5} /></div>
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                        <li className="active"><a data-target="#pic-1" data-toggle="tab"><img width="79" height="79" src={product.img1} /></a></li>
                        <li><a data-target="#pic-2" data-toggle="tab"><img width="79" height="79" src={product.img2} /></a></li>
                        <li><a data-target="#pic-3" data-toggle="tab"><img width="79" height="79" src={product.img3} /></a></li>
                        <li><a data-target="#pic-4" data-toggle="tab"><img width="79" height="79" src={product.img4} /></a></li>
                        <li><a data-target="#pic-5" data-toggle="tab"><img width="79" height="79" src={product.img5} /></a></li>
                    </ul>
                    
                    </div>
                    <div className="details col-md-6">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="rating">
                        <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </div>
                        <span class="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">{product.description}</p>
                    <h4 className="price">Giá: <span>${product.price}</span></h4>
                    <p className="vote"><strong>91%</strong> người mua thích sản phẩm này! <strong>(87 votes)</strong></p>
                    <h5 className="sizes">Cỡ:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 className="colors">Màu sắc:
                        <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span className="color green"></span>
                        <span className="color blue"></span>
                    </h5>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">Thêm vào giỏ hàng</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}

export default MainDetailProductComponent;