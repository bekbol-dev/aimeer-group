import $api from "../../components/api/Api";
import {FeedbackActions} from "../ActionTypes";


export const postFeedback = (data, toast) => {
  return async (dispatch) => {
    try {
      dispatch({type: FeedbackActions.ADD_FEEDBACK})
      const response = await $api.post('connect-with-us/', data)
      toast.success('Данные успешно отправлены!')
      dispatch({type: FeedbackActions.ADD_FEEDBACK_SUCCESS})
    }catch (e) {
      toast.error(`Произошла ошибка! ${e.detail || e.response?.data?.message}`)
      dispatch({type: FeedbackActions.ADD_FEEDBACK_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}