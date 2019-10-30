import React,{Component} from 'react';
import Carousel from './Main_index_contentLeft_carousel';
import SilderCard from './Main_index_contentLeft_sliderCard';
import OtherComponent from './Main_index_contentLeft_otherComponent';
import IphonesContainer from './../containers/Iphones_Container';
export default class ContentLeft extends Component{
    render(){
        return (
            <section className="content-left">
                <Carousel />
                <SilderCard />
                <IphonesContainer />
                <OtherComponent />
            </section>
                
        )
    }
}