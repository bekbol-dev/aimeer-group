import {ReviewsActions} from "../../../store/ActionTypes";
import $api from "../../../components/api/Api";

export const getReviews = () => {
  return async (dispatch) => {
    try {
      dispatch({type: ReviewsActions.GET_REVIEWS})
      const response = await $api('feedback/')
      dispatch({type: ReviewsActions.GET_REVIEWS_SUCCESS, payload: response.data})
    }catch (e) {
      dispatch({type: ReviewsActions.GET_REVIEWS_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}