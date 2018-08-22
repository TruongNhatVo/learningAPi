import * as types from './../contanst/types';
import apiCall from './../utils/apiCaller';


export const fetchProductAct = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const fetchProductRequest = () => {
    return dispatch => {
        return apiCall('products', 'GET', null).then(res => {
            dispatch(fetchProductAct(res.data));
        })
    }
}

export const deleteProductAct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const deleteProductRequest = (id) => {
    return dispatch => {
        return apiCall(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProductAct(res.data.id));
        })
    }
}

export const addProductAct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest = (product) => {
    return dispatch => {
        return apiCall('products', 'POST', product).then(res => {
            dispatch(addProductAct(res.data));
        })
    }
}

export const fetchProductByIdAct = (product) => {
    return {
        type: types.FETCH_PRODUCTBYID,
        product
    }
}

export const fetchProductByIdRequest = (id) => {
    return dispatch => {
        return apiCall(`products/${id}`, 'GET', null).then(res => {
            dispatch(fetchProductByIdAct(res.data))
        })
    }
}
