import $api from "../../components/api/Api";
import {FeedbackActions} from "../ActionTypes";


export const postFeedback = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: FeedbackActions.ADD_FEEDBACK})
      const response = await $api.post('connect-with-us/', data)
      dispatch({type: FeedbackActions.ADD_FEEDBACK_SUCCESS})
    }catch (e) {
      dispatch({type: FeedbackActions.ADD_FEEDBACK_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}