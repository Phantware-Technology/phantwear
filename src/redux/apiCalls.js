import { axiosInstance } from '../utils/requestMethods'
import { loginFailure, loginStart, loginSuccess } from './userRedux'

export const login = async (dispatch, user) => {
  dispatch(loginStart)
  try {
    const res = await axiosInstance.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure)
  }
}
