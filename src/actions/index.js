import * as types from './../constants/index';
export function addToCart(product, quantity = 1){
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export function plushCart(cart){
    return{
        type: types.PLUSH_CART,
        cart
    }
}
export function minusCart(cart){
    return{
        type: types.MINUS_CART,
        cart
    }
}

export function deleteCart(cart){
    return{
        type: types.DELETE_CART,
        cart
    }
}

export function search(isSearchBol , keySearch){
    return{
        type: types.SEARCH,
        isSearchBol,
        keySearch
    }
}