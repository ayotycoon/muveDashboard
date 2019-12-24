import { __fetchUserData} from '../../providers/auth.service'

export const types = {
   FETCH_USER_DATA : 'FETCH_USER_DATA'
}

export const fetchUserData = () => dispatch => {
    __fetchUserData().then(data => {
        dispatch({
            type: types.FETCH_USER_DATA,
            payload: data
        })
    })


   
}