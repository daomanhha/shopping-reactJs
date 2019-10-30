import React,{Component} from 'react';
import MainCartProducts from './Main_cart_products';
import ShoppingCartDetail from './Main_cart_shoppingCartDetail';


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
                            {this.props.children}
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
                    <ShoppingCartDetail />
                    </div>
                </div>  
            </section>
        </main>
    );
    }
}

export default MainCart;
