import React,{Component} from 'react';

export default class Categories extends Component{
    render(){
        return(
            <section className="categories">
                <ul>
                    <li>Categories</li>
                    <li>
                        <i className="fas fa-gift"></i>
                        <a href="#slider-card">Nổi bật</a>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <a href="#iphone-component">IPHONE</a>
                    </li>
                    <li>
                        <i className="fa fa-angle-double-right"></i>
                        <a href="#otherComponent">Loại khác</a>
                    </li>
                </ul>
                </section>
                
        )
    }
}