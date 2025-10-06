import { thunk } from "redux-thunk"; // Named import of thunk middleware
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { paymentReducer } from "./Payment/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  products: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
  payment: paymentReducer,
  adminOrder: adminOrderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
