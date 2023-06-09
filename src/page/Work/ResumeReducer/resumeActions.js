import {ResumeActions} from "../../../store/ActionTypes";
import $api from "../../../components/api/Api";

export const sendResume = (data, toast) => {
  return async (dispatch) => {
    try {
      dispatch({type: ResumeActions.SEND_RESUME})
      const response = await $api.post('resumes/', data)
      toast.success('Данные успешно отправлены!')
      dispatch({type: ResumeActions.SEND_RESUME_SUCCESS})
    }catch (e) {
      toast.error(`Произошла ошибка! ${e.detail || e.response?.data?.message}`)
      dispatch({type: ResumeActions.SEND_RESUME_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}