import * as Types from './../constants/index';
const initialState = [
    {
        product:{
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
        quantity: 1
    }
];
export default (state = initialState , action)=>{
    switch(action.type){
        case Types.ADD_TO_CART:
            let stateAffterAdd = [...state];
            let indexAdd = findIndex(stateAffterAdd, action.product.id);
            if(indexAdd !== -1){
                stateAffterAdd[indexAdd].quantity += action.quantity;
            }else{
                let newAddState = {
                    product: action.product,
                    quantity: action.quantity
                }
                stateAffterAdd.push(newAddState);
            }
            return stateAffterAdd;
        case Types.PLUSH_CART:
            let stateAfterPlush = [...state];
            let indexPlus = findIndex(stateAfterPlush, action.cart.id);
            if(indexPlus !== -1){
                stateAfterPlush[indexPlus].quantity += 1;
            }
            return stateAfterPlush;
        case Types.MINUS_CART:
            let stateAfterMinus = [...state];
            let indexMinus = findIndex(stateAfterMinus, action.cart.id);
            if(indexMinus !== -1){
                if(stateAfterMinus[indexMinus].quantity > 1){
                    stateAfterMinus[indexMinus].quantity -= 1;
                }
            }
            return stateAfterMinus;
        case Types.DELETE_CART:
            let stateAfterDelete = [...state];
            let indexDelete = findIndex(stateAfterDelete, action.cart.id);
            if(window.confirm('bạn có muốn xóa không')){
                let indexDelete = findIndex(stateAfterDelete, action.cart.id);
                if(indexDelete !== -1){
                    stateAfterDelete.splice(indexDelete,1);
                }
            }
            return stateAfterDelete;
        default: 
            return state;
    }
}

function findIndex(carts, id){
    let result = -1;
    if(carts.length > 0){
        carts.forEach((ele,index)=>{
            if(ele.product.id === id){
                result = index;
            }
        })
    }
    return result;
}