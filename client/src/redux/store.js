import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './reducers/product'

const reducers = combineReducers({productList:productReducer, productDetails: productDetailsReducer})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducers, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store