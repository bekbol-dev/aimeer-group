import {CertificateActions} from "../../../store/ActionTypes";

const initialState = {
  certificates: [],
  isError: '',
  isLoading: false,
}

export const certificateReducer = (state = initialState, action) => {
  switch (action.type){
    case CertificateActions.GET_CERTIFICATES: {
      return {...state, isLoading: true}
    }
    case CertificateActions.GET_CERTIFICATES_SUCCESS: {
      return {...state, isLoading: false, isError: '', certificates: action.payload}
    }
    case CertificateActions.GET_CERTIFICATES_ERROR: {
      return {...state, isLoading: false, certificates: [], isError: action.payload}
    }
    default: return state
  }
}