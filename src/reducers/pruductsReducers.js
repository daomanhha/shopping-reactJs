import * as Types from './../constants/index';
const initialState = [
    {
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
    {
        id:1,
        name:'Iphone 7 plus',
        price: 20,
        img1:'',
        img2:'',
        img3:'',
        img4:'',
        img5:'',
        description:'Sản phẩm do Apple sản xuất'
    },
    {
        id:2,
        name:'Iphone 8 ',
        price: 25,
        img1:'',
        img2:'',
        img3:'',
        img4:'',
        img5:'',
        description:'Sản phẩm do Apple sản xuất'
    },
    {
        id:3,
        name:'Iphone 9',
        price: 30,
        img1:'',
        img2:'',
        img3:'',
        img4:'',
        img5:'',
        description:'Sản phẩm do Apple sản xuất'
    }

]
export default (state = initialState , action)=>{
    switch(action.type){
        default: 
            return state;
    }
}