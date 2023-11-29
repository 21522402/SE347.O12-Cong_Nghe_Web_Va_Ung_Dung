import { combineReducers, createStore } from "redux";
import rootReducer from "./reducer";
import productReducer from "./Product/reducer";
const store = createStore(combineReducers({
    rootReducer,
    productReducer
}));

export default store