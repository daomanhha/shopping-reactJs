import React,{Component} from 'react';
export default class SliderCard extends Component{
    render(){
        return (
            <section id="slider-card" className="slider-card" >
                    <div className="sub-tittle">
                    <h2 className="main-tittle">
                        <span>Sản phầm nổi bật</span>
                    </h2>
                    </div>
                    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                    <div className="controls-top fixed-controls-top">
                        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                            className="fas fa-chevron-right"></i></a>
                    </div>

                    <ol className="carousel-indicators">
                        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                        <li data-target="#multi-item-example" data-slide-to="1"></li>
                        <li data-target="#multi-item-example" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="carousel-item">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                <div className="card mb-2">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="#">
                                            <img className="pic-1" src="./img/IP601.jpg"/>
                                            <img className="pic-2" src="./img/IP602.jpg"/>
                                        </a>
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
                                    <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    </div>                      
                </section>         
        )
    }
}