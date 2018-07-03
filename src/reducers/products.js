import * as types from './../contanst/types';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.types ) {
        case types.FETCH_PRODUCTS :
            return state;
        default :
            return state;
    }
}

export default products;