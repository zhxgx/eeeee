import {createStore,applyMiddleware} from 'redux'
import reducer from "./reducer";
import state from "./state";
import thunk from 'redux-thunk';//中间件

let store = createStore(
  reducer,
  state,
  applyMiddleware(thunk)
);

export default store;