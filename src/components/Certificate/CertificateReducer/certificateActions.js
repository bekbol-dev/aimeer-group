import {CatalogActions, CertificateActions} from "../../../store/ActionTypes";
import $api from "../../../components/api/Api";

export const getCertificate = () => {
  return async (dispatch) => {
    try {
      dispatch({type: CertificateActions.GET_CERTIFICATES})
      const response = await $api.get('certificates/')
      dispatch({type: CertificateActions.GET_CERTIFICATES_SUCCESS, payload: response.data})
    }catch (e) {
      dispatch({type: CertificateActions.GET_CERTIFICATES_ERROR, payload: e.detail || e.response?.data?.message})
    }
  }
}