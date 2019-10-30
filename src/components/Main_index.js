import React,{Component} from 'react';
import Categories from './Main_index_categories';
import ContentLeft from './Main_index_contentLeft';
import ModelButton from './Main_index_modalButton';

export default class MainIndex extends Component{
    componentDidMount () {
        let script = document.createElement("script");
        script.src = "./js/myJs2.js";
        script.async = true;
        document.body.appendChild(script);
    }
    componentWillUnmount(){
        let script = document.querySelector("script[src='./js/myJs2.js']")
        if(script){
            script.remove();
        }
    }
    render(){
        return(
            <main>
                <Categories />
                <ContentLeft />
                <ModelButton />
            </main>
        )
    }
}