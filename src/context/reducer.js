import {
  HANDLE_CHANGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  GET_FILTERS,
  CLEAR_ALERT,
  CLEAR_FILTERS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  ADD_CART_BEGIN,
  ADD_CART_SUCCESS,
  CHANGE_CART_QUANTITY,
  CALC_CART_TOTAL,
  SET_LAST_URL,
  GET_ALL_ADDRESSES_BEGIN,
  GET_ALL_ADDRESSES_SUCCESS,
  GET_ALL_ADDRESSES_ERROR,
  SET_DELIVERY_ADDRESS,
  SET_CLIENT_SECRET,
  GET_PUBLISHABLE_KEY_BEGIN,
  GET_PUBLISHABLE_KEY_SUCCESS,
  GET_ORDERS_SUCCESS,
  CUSTOM_ALERT,
  UPDATE_USER_BEGIN,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  LOGOUT_USER,
} from './actions'

//import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    return { ...state, [action.payload.name]: action.payload.value }
  }
  if (action.type === CUSTOM_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload.alertText,
      alertType: action.payload.alertType,
    }
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: '', alertType: '' }
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'Login successful !',
      alertType: 'success',
      user: action.payload.user,
      token: action.payload.token,
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: 'danger',
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      showAlert: true,
      alertText: 'Logout sucessful! Redirecting....',
      alertType: 'success',
      user: '',
      token: '',
    }
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'Registration sucessful!',
      alertType: 'success',
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'danger',
      alertType: action.payload.msg,
    }
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state }
  }

  if (action.type === GET_FILTERS) {
    return {
      ...state,
      products: action.payload.result,
      productsCount: action.payload.count,
      subCategoryOptions: action.payload.subCategoryOptions,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return { ...state }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, isLoading: false, displayedProduct: action.payload.data }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, isLoading: false }
  }
  if (action.type === ADD_CART_BEGIN) {
    return { ...state }
  }
  if (action.type === ADD_CART_SUCCESS) {
    return {
      ...state,
      cart: action.payload.cart,
      showAlert: true,
      alertType: 'success',
      alertText: `${action.payload.quantity} ${
        action.payload.quantity > 1 ? 'items' : 'item'
      } added!`,
    }
  }
  if (action.type === ADD_ADDRESS_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === ADD_ADDRESS_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'Address added !',
    }
  }
  if (action.type === CHANGE_CART_QUANTITY) {
    return { ...state, cart: action.payload.cart }
  }
  if (action.type === CALC_CART_TOTAL) {
    return { ...state, total: action.payload.total }
  }
  if (action.type === SET_LAST_URL) {
    return { ...state, lastUrl: action.payload.lastUrl }
  }
  if (action.type === GET_ALL_ADDRESSES_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_ALL_ADDRESSES_SUCCESS) {
    return { ...state, allAddresses: action.payload.allAddresses }
  }
  if (action.type === GET_ALL_ADDRESSES_ERROR) {
    return { ...state, alertType: 'danger', alertText: action.payload.msg }
  }
  if (action.type === SET_DELIVERY_ADDRESS) {
    return { ...state, deliveryAddress: action.payload.deliveryAddress }
  }
  if (action.type === SET_CLIENT_SECRET) {
    return { ...state, client_Secret: action.payload.client_Secret }
  }
  if (action.type === GET_PUBLISHABLE_KEY_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_PUBLISHABLE_KEY_SUCCESS) {
    return { ...state, publishableKey: action.payload.publishableKey }
  }
  if (action.type === GET_ORDERS_SUCCESS) {
    return { ...state, myOrders: action.payload.myOrders }
  }
  throw new Error(`No such action :${action.type}`)
}

export default reducer
