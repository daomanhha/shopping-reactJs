import React,{Component} from 'react';
import { Link} from "react-router-dom";
import {connect} from 'react-redux';

class Header extends Component{
    render(){
        let {carts} = this.props;
        return(
            <header>
                <nav id="nav-bar" className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary scrolling-navbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <a className="navbar-brand" href="#">
                            <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo" />
                            </a>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 ml-auto">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
                        </form>
                        <button type="button" className="btn btn-slack">
                            <Link to="/cart">
                                <i className="fas fa-cart-arrow-down"></i>
                            </Link>
                        </button>
                        <span className="counter">{carts.length}</span>
                    </div>
                </nav>
            </header>
        )
    }
}
function mapStateToProps(state){
    return{
        carts: state.Carts,
    }
}
function mapDispatchToProps(dispatch, props){
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);