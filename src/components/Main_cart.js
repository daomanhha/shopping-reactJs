import React,{Component} from 'react';


class MainCart extends Component {
    render(){
    return (
        <main>
            <section id="shopping-cart">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col" className="border-0 bg-light">
                                <div className="p-2 px-3 text-uppercase">Sản phẩm</div>
                                </th>
                                <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Giá</div>
                                </th>
                                <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Số lượng</div>
                                </th>
                                <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Tổng giá</div>
                                </th>
                                <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Xóa</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row" className="border-0">
                                <div className="p-2">
                                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                                    <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">Iphone 11</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Iphone</span>
                                    </div>
                                </div>
                                </th>
                                <td className="border-0 align-middle"><strong>$79.00</strong></td>
                                <td className="border-0 align-middle">
                                <div className="d-flex">
                                    <strong>3</strong>
                                    <div className="button-change-quantity d-flex-quantity">
                                    <button type="button">+</button>
                                    <button type="button">-</button>
                                    </div>
                                </div>
                                </td>
                                <td className="border-0 align-middle"><strong>$79.00</strong></td>
                                <td className="border-0 align-middle">
                                <button type="button" className="btn-delete-fixed btn-outline-danger-fixed btn-xs">
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                    <div className="col-lg-6">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Phiếu giảm giá</div>
                        <div className="p-4">
                        <p className="font-italic mb-4">Nếu bạn có phiếu giảm giá xin hãy điền vào đây</p>
                        <div className="input-group mb-4 border rounded-pill p-2">
                            <input type="text" placeholder="Mã Giảm Giá" aria-describedby="button-addon3" className="form-control border-0"/>
                            <div className="input-group-append border-0">
                            <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Phiếu mua hàng </div>
                        <div className="p-4">
                        <p className="font-italic mb-4">Vận chuyển và bổ sung được tính trên giá trị bạn đã nhập</p>
                        <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Đơn hàng </strong><strong>$390.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Phí vận chuyển</strong><strong>$10.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tổng cộng</strong>
                            <h5 className="font-weight-bold">$400.00</h5>
                            </li>
                        </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Checkout</a>
                        </div>
                    </div>
                    </div>
                </div>  
            </section>
        </main>
    );
    }
}

export default MainCart;
