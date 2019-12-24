import { logoutUser} from '../../components/common/helper.service'

export const types = {
   LOGIN : 'LOGIN',
   LOGOUT : 'LOGOUT',
}

export const login = (data) => dispatch => {
  
  
        dispatch({
            type: types.LOGIN,
            payload: data
        })



   
}
export const logout = () => dispatch => {
    logoutUser();

  
  
        dispatch({
            type: types.LOGOUT
        })



   
}
