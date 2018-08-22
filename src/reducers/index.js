import products from './products';
import productEdit from './editProduct';
import { combineReducers } from 'redux';

const productsReducers = combineReducers({
    products,
    productEdit
})

export default productsReducers