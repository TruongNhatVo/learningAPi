import * as types from './../contanst/types';
import apiCall from './../utils/apiCaller';

export const fetchProductRequest = (products) => {
    return dispatch => {
        return apiCall('products','GET',null).then( res => {
            dispatch(fetchProductAct(res.data));
        })
    }
}

export const fetchProductAct = (products) => {
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
}