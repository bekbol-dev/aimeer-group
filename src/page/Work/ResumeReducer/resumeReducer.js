import {FeedbackActions, ResumeActions} from "../../../store/ActionTypes";

const initialState = {
  isError: '',
  isLoading: false,
}

export const ResumeReducer = (state = initialState, action) => {
  switch (action.type){
    case ResumeActions.SEND_RESUME: {
      return {...state, isLoading: true}
    }
    case ResumeActions.SEND_RESUME_SUCCESS: {
      return {...state, isLoading: false, isError: ''}
    }
    case ResumeActions.SEND_RESUME_ERROR: {
      return {...state, isLoading: false, isError: action.payload}
    }
    default: return state
  }
}