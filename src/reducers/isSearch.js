import * as Types from './../constants/index';
const initialState = {
    isSearch: false,
    searchKey: ''
};
export default (state = initialState , action)=>{
    switch(action.type){
        case Types.SEARCH:
            let SearchState = {...state};
            SearchState = {
                isSearch: action.isSearchBol,
                searchKey: action.keySearch
            }
            return SearchState;
        default: 
            return state;
    }
}
