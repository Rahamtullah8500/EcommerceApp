import axios from "axios"
import { ActionTypes } from "./action-types"



export const setProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

// export const removeSelectedProduct = () =>{
//     return{
//         type:ActionTypes.REMOVE_SELECTED_PRODUCT,
//     }
// }

export const fetchProducts = () =>{
    return  function (dispatch){
      axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            dispatch(setProducts(response.data))
        })
        .catch((error)=>console.log(error))      
    }
}

export const fetchItem=(id)=>{
    return (dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>dispatch(selectedProduct(response.data)))
        .catch(error=>console.log(error))
    }
}

export const addToCart=(item)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:item
    }
}

export const removeCartItem=(id)=>{
    return{
        type:ActionTypes.REMOVE_CART_PRODUCT,
        payload:id
    }
}