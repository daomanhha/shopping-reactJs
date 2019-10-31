import * as Types from './../constants/index';
const initialState = false;
export default (state = initialState , action)=>{
    switch(action.type){
        case Types.DISCOUNT_OPEN:
            if(action.discountCode.discountCode.toLowerCase() === 'gd1' ){
                return true;
            }
            return false;
        default: 
            return state;
    }
}
