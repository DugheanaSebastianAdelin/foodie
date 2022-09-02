import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import cartReducer from "./cartReducer";
import loginReducer from "./loggedReducer";


let reducers = combineReducers({
    cartReducer:cartReducer,
    addressReducer:addressReducer,
    loginReducer:loginReducer,
})

const rootReducer = (state,action)=>{
    return reducers(state,action)
}

export default rootReducer;