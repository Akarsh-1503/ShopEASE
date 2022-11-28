import {createStore, combineReducers,applyMiddleware} from 'redux';
import { getProductDetailReducer, getProductsReducer } from './reducers/productReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { CartReducer } from './reducers/CartReducer';

const middleware= [thunk];

const reducer= combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    Cart: CartReducer
})


const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;





