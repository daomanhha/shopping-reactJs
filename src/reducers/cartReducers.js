import * as Types from './../constants/index';
const initialState = [
    {
        product:{
            id:0,
            name:'Iphone 6 plus',
            price: 15,
            img1:'',
            img2:'',
            img3:'',
            img4:'',
            img5:'',
            description:'Sản phẩm do Apple sản xuất'
        },
        quantity: 1
    }
];
export default (state = initialState , action)=>{
    switch(action.type){
        default: 
            return state;
    }
}