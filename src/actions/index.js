export const addToCart = item => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const addReview = item => {
    return {
        type: 'ADD_REVIEW',
        payload: item
    }
}