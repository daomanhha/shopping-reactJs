import React,{Component} from 'react';
import {connect} from 'react-redux';
import IphonesComponent from './../components/Main_index_contentLeft_Iphones';
import IphoneProduct from './../components/Main_index_contentLeft_iphoneProduct';
class IphonesContainer extends Component{
    render(){
        return(
            <IphonesComponent>
                {renderProduct(this.props.Products)}
            </IphonesComponent>
        );
    }
}
function renderProduct(products){
    return products.map((ele, index)=>{
        return <IphoneProduct product={ele} key={index}/>
    });
}

function mapStateToProps(state){
    return{
        Products: state.Products
    }
}

function mapDispatchToProps(dispatch, props){
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IphonesContainer)