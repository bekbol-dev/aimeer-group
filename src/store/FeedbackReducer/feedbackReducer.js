import {FeedbackActions} from "../ActionTypes";


const initialState = {
  isError: '',
  isLoading: false,
}

export const FeedbackReducer = (state = initialState, action) => {
  switch (action.type){
    case FeedbackActions.ADD_FEEDBACK: {
      return {...state, isLoading: true}
    }
    case FeedbackActions.ADD_FEEDBACK_SUCCESS: {
      return {...state, isLoading: false, isError: ''}
    }
    case FeedbackActions.ADD_FEEDBACK_ERROR: {
      return {...state, isLoading: false, isError: action.payload}
    }
    default: return state
  }
}