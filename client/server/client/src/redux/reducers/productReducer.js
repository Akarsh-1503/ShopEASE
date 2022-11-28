
import * as actionTypes from "../constants/productConstants.js"

export const getProductsReducer  = (state={ product: [] },action) =>{

    switch(action.type){
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {product: action.payload}

        case actionTypes.GET_PRODUCT_FAIL:
            return {error: action.payload}

        default:
            return state;

    }
}

export const getProductDetailReducer = ( state= {product: {}},action )=>{

    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
            return {loading:true}
           
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {loading:false, product: action.payload}
        
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return {loading:false, error: action.payload}
        
        case actionTypes.GET_PRODUCT_DETAIL_RESET:
            return {product: {}}
        
        default:
            return state
    }

}


