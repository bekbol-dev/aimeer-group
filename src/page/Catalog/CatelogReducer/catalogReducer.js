import {CatalogActions} from "../../../store/ActionTypes";

const initialState = {
  products: [],
  isError: '',
  isLoading: false,
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type){
    case CatalogActions.GET_PRODUCTS: {
      return {...state, isLoading: true}
    }
    case CatalogActions.GET_PRODUCTS_SUCCESS: {
      return {...state, isLoading: false, isError: '', products: action.payload}
    }
    case CatalogActions.GET_PRODUCTS_ERROR: {
      return {...state, isLoading: false, products: [], isError: action.payload}
    }
    default: return state
  }
}