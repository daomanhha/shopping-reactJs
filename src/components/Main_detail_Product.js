import React,{Component} from 'react';
import MainDetailProductComponent from './Main_detail_product_Component';

class MainDetailProduct extends Component{
    render(){
        let {match} = this.props;
        console.log(match.params.id);
        return(
            <main>
                <section class="detail-products">
                    <div class="container">
                        <MainDetailProductComponent />
                    </div>
                </section>
            </main>   
        );
    }
}

export default MainDetailProduct;