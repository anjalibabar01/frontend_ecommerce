// paymentReducer.js
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  paymentLinkUrl: null,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return { ...state, loading: true, error: null, paymentLinkUrl: null };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        paymentLinkUrl: action.payload, // if any
      };
    case CREATE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        paymentLinkUrl: null,
      };
    default:
      return state;
  }
};
