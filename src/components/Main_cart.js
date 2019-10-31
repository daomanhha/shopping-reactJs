import React,{Component} from 'react';
import ShoppingCartDetail from './Main_cart_shoppingCartDetail';
import MainCartDiscount from './Main_Cart_Discount';


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
                    
                    <MainCartDiscount />
                    <ShoppingCartDetail />
                    </div>
                </div>  
            </section>
        </main>
    );
    }
}

export default MainCart;
