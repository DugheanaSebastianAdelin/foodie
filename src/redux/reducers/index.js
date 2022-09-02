// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import authenticatorReducer from './authenticatorReducer';
import cartReducer from './cartReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  auth: authenticatorReducer,
  cart: cartReducer,
});
// Exports
export default rootReducer;
