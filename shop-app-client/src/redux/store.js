import { combineReducers, createStore } from "redux";
import rootReducer from "./reducer";
import productReducer from "./Product/reducer";
import  importProductsReducer from './ImportProduct/reducer'
const store = createStore(combineReducers({
    rootReducer,
    productReducer,
    importProductsReducer
}));

export default store