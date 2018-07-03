import * as types from './../contanst/types';

export const fetchProductAct = (products) => {
    type : types.FETCH_PRODUCTS,
    products
}