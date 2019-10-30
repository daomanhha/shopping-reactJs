import React,{Component} from 'react';

export default class OtherComponent extends Component{
    render(){
        return (
            <section id="otherComponent" className="other-component">
                <div className="sub-tittle">
                    <h2 className="main-tittle">
                    <span>Sản phẩm khác</span>
                    </h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <a href="#">
                            <img src="https://be02.cp-static.com/objects/high_pic/e/e5b/1804345_laptops-microsoft-surface-laptop-jky-00005.jpg" alt=""/>
                            </a>
                        </div>   
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <a href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqTUcsqrVXDCgvVdHHFtbTho6nxJdWi7eAUMpefLQeh52kegS&s" alt=""/>
                            </a>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <a href="#">
                            <img src="https://dummyimage.com/320x250/000/fff" alt=""/>
                            </a>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3">
                            <a href="#">
                            <img src="https://dummyimage.com/320x250/000/fff" alt=""/>
                            </a>
                        </div>  
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3">
                            <a href="#">
                            <img src="https://dummyimage.com/320x250/000/fff" alt=""/>
                            </a>
                        </div>  
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mt-3">
                            <a href="#">
                            <img src="https://dummyimage.com/320x250/000/fff" alt=""/>
                            </a>
                        </div> 
                    </div>    
                </div>
            </section>
        )
    }
}