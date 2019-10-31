import React,{Component} from 'react';
import {connect} from 'react-redux';
import IphonesComponent from './../components/Main_index_contentLeft_Iphones';
import IphoneProduct from './../components/Main_index_contentLeft_iphoneProduct';
import * as actions from './../actions/index';
class IphonesContainer extends Component{
    render(){
        return(
            <IphonesComponent>
                {renderProduct(this.props.search, this.props.Products, this.props.addToCart)}
            </IphonesComponent>
        );
    }
}
function renderProduct(search, products, addToCart){
    if(search.isSearch){
        return products.filter((ele,index)=>{
            return ele.name.toLowerCase().indexOf(search.searchKey.toLowerCase())!==-1;
        }).map((ele, index)=>{
            return <IphoneProduct addToCarts={addToCart} product={ele} key={index}/>
        });
    }
    else{
        return products.map((ele, index)=>{
            return <IphoneProduct addToCarts={addToCart} product={ele} key={index}/>
        });
    }
}

function mapStateToProps(state){
    return{
        Products: state.Products,
        search: state.isSearch
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        addToCart(product){
            dispatch(actions.addToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IphonesContainer)