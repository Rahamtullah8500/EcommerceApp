import { ActionTypes } from "../actions/action-types";

const initialState = {
    productItems:[],
    selectedProduct:'',
    cartItems:[]
}



export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,productItems:action.payload}
        
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,selectedProduct:action.payload}

        case ActionTypes.ADD_TO_CART:
            return {...state,cartItems:[...state.cartItems,action.payload]}

        case ActionTypes.REMOVE_CART_PRODUCT:
            return {...state,cartItems:[...state.cartItems.filter((item)=> item.id !== action.payload)]}
        
        default:
            return state;
    }
}