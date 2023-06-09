import {CatalogActions} from "../../../store/ActionTypes";
import $api from "../../../components/api/Api";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({type: CatalogActions.GET_PRODUCTS})
      const response = await $api('products/')
      dispatch({type: CatalogActions.GET_PRODUCTS_SUCCESS, payload: response.data})
    }catch (e) {
      dispatch({type: CatalogActions.GET_PRODUCTS_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}