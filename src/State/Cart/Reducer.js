import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};

// 🔹 Helper: recalc totals based on items
const recalcCart = (cartItems, oldCart = {}) => {
  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const totalDiscountedPrice = cartItems.reduce(
    (sum, i) => sum + i.product.discountedPrice * i.quantity,
    0
  );
  const discount = totalPrice - totalDiscountedPrice;

  return {
    ...oldCart,
    totalPrice,
    totalDiscountedPrice,
    discount,
  };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      // ⚡ don’t set loading → prevents UI blink
      return { ...state, error: null };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        cartItems: action.payload.cartitems || [],
        loading: false,
      };

    case ADD_ITEM_TO_CART_SUCCESS: {
      const updatedItems = action.payload.cartitems || [];
      return {
        ...state,
        cart: recalcCart(updatedItems, action.payload),
        cartItems: updatedItems,
        loading: false,
      };
    }

    case REMOVE_CART_ITEM_SUCCESS: {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.meta.itemId
      );
      return {
        ...state,
        cartItems: updatedItems,
        cart: recalcCart(updatedItems, state.cart),
        loading: false,
      };
    }

    case UPDATE_CART_ITEM_SUCCESS: {
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.meta.itemId ? { ...item, ...action.payload } : item
      );
      return {
        ...state,
        cartItems: updatedItems,
        cart: recalcCart(updatedItems, state.cart),
        loading: false,
      };
    }

    case ADD_ITEM_TO_CART_FAILURE:
    case GET_CART_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
