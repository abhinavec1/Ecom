import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { popularProducts } from "../data"

export const productsReducer = () => {
    return popularProducts
}

export const addToCartReducer = (cartItems = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...cartItems, action.payload]
    }

    return cartItems
}

export const addReviewReducer = (reviews = [], action) => {
    if (action.type === 'ADD_REVIEW') {
        return [...reviews, action.payload]
    }

    return reviews
}

export default combineReducers({
    form : formReducer,
    products: productsReducer,
    cartItems: addToCartReducer,
    reviews: addReviewReducer,
})

