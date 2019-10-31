import React,{Component} from 'react';
import Carousel from './Main_index_contentLeft_carousel';
import SilderCard from './Main_index_contentLeft_sliderCard';
import OtherComponent from './Main_index_contentLeft_otherComponent';
import IphonesContainer from './../containers/Iphones_Container';
import {connect} from 'react-redux';
class ContentLeft extends Component{
    render(){
        let{Search} = this.props;
        return (
            <section className="content-left">
                {Search.isSearch || <Carousel />}
                {Search.isSearch || <SilderCard />}
                <IphonesContainer />
                {Search.isSearch || <OtherComponent />}
            </section>
                
        )
    }
}
function mapStateToProps(state){
    return{
        Search: state.isSearch
    }
}
function mapDispatchToProps(dispatch, props){
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentLeft);