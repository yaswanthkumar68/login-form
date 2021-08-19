import { createStore, combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        loginDetails : loginReducer,
    }))

    return store
}

export default configureStore