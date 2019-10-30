import React,{Component} from 'react';


export default class ModelButton extends Component{
    render(){
        return(
            <section className="modal-button">
                <div className="modal fade right" 
                        id="ModalDanger" 
                        tabindex="-1" 
                        role="dialog" 
                        aria-labelledby="myModalLabel"
                        aria-hidden="t`rue">
                    <div className="modal-dialog modal-notify modal-danger modal-side" role="document">
            
                        <a href="" className="btn-floating btn-fb" >
                        <i className="fa fa-facebook"></i>
                        </a>
                        <a href="" className="btn-floating btn-email" >
                        <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="text-center fixed-button">
                    <a href="" className="btn-floating btn waves-effect waves-light" 
                            data-toggle="modal" 
                            data-target="#ModalDanger">
                    <i className="fas fa-address-book"></i>
                    </a>
                </div>
                <div className="text-center fixed-backtotop-button">
                    <a href="#" className="btn-floating btn waves-effect waves-light">
                    <i className="fas fa-arrow-up"></i>
                    </a>
                </div>
                <div className="text-center fixed-showCategories-button">
                    <a href="javascript:void(0)" className="btn-floating btn waves-effect waves-light">
                    <span>categories</span>
                    <i className="fas fa-sliders-h"></i>
                    </a>
                </div>
            </section>  
        )
    }
}