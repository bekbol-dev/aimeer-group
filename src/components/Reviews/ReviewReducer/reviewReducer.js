import {ReviewsActions} from "../../../store/ActionTypes";

const initialState = {
  reviews: [],
  isError: '',
  isLoading: false,
}

export const ReviewReducer = (state = initialState, action) => {
  switch (action.type){
    case ReviewsActions.GET_REVIEWS: {
      return {...state, isLoading: true}
    }
    case ReviewsActions.GET_REVIEWS_SUCCESS: {
      return {...state, isLoading: false, isError: '', reviews: action.payload}
    }
    case ReviewsActions.GET_REVIEWS_ERROR: {
      return {...state, isLoading: false, reviews: [], isError: action.payload}
    }
    default: return state
  }
}