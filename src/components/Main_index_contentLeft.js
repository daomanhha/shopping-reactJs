import React,{Component} from 'react';
import Carousel from './Main_index_contentLeft_carousel';
import SilderCard from './Main_index_contentLeft_sliderCard';
import IphoneProduct from './Main_index_contentLeft_iphoneProduct';
import OtherComponent from './Main_index_contentLeft_otherComponent';
export default class ContentLeft extends Component{
    render(){
        return (
            <section className="content-left">
                <Carousel />
                <SilderCard />
                <section id="iphone-component" className="cards-component">
                    <div className="sub-tittle">
                    <h2 className="main-tittle">
                        <span>IPHONE</span>
                    </h2>
                    </div>
                    <div className="container">
                    <div className="row">
                        <IphoneProduct />
                        <IphoneProduct />
                        <IphoneProduct />
                        <IphoneProduct />
                        <IphoneProduct />
                        <IphoneProduct />
                        <IphoneProduct />
                    </div>
                    <nav aria-label="Page navigation example" className="page-pagination">
                        <ul className="pagination pg-blue">
                        <li className="page-item ">
                            <a className="page-link" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link">
                            1<span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">2 </a>
                        </li>
                        <li className="page-item"><a className="page-link">3</a></li>
                        <li className="page-item ">
                            <a className="page-link">Next</a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </section>
                <OtherComponent />
            </section>
                
        )
    }
}