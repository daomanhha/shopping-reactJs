import * as Types from './../constants/index';
const initialState = [
    {
        id:0,
        name:'Iphone 6 plus',
        price: 15,
        img1:'./img/IP601.jpg',
        img2:'./img/IP602.jpg',
        img3:'',
        img4:'',
        img5:'',
        description:'Sản phẩm do Apple sản xuất'
    },
    {
        id:1,
        name:'Iphone 7 plus',
        price: 20,
        img1:'./img/IP701.jpeg',
        img2:'./img/IP702.jpg',
        img3:'./img/IP703.jpg',
        img4:'./img/IP704.jpg',
        img5:'./img/IP705.jpg',
        description:'Sản phẩm do Apple sản xuất'
    },
    {
        id:2,
        name:'Iphone 8 ',
        price: 25,
        img1:'./img/IP803.jpg',
        img2:'./img/IP804.jpg',
        img3:'./img/IP801.jpg',
        img4:'./img/IP804.jpg',
        img5:'./img/IP805.jpg',
        description:'Sản phẩm do Apple sản xuất'
    },
    {
        id:3,
        name:'Iphone XS',
        price: 30,
        img1:'./img/IPXS03.jpg',
        img2:'./img/IPXS04.jpg',
        img3:'./img/IPXS01.jpg',
        img4:'./img/IPXS02.jpg',
        img5:'./img/IPXS05.jpg',
        description:'Sản phẩm do Apple sản xuất'
    }

]
export default (state = initialState , action)=>{
    switch(action.type){
        default: 
            return state;
    }
}