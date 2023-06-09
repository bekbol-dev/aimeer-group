import {ResumeActions} from "../../../store/ActionTypes";
import $api from "../../../components/api/Api";

export const sendResume = (data) => {
  return async (dispatch) => {
    try {
      dispatch({type: ResumeActions.SEND_RESUME})
      const response = await $api.post('resumes/', data)
      dispatch({type: ResumeActions.SEND_RESUME_SUCCESS})
    }catch (e) {
      dispatch({type: ResumeActions.SEND_RESUME_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}