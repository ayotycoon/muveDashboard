
export const types = {
   FETCH_USER_DATA : 'FETCH_USER_DATA'
}

export const fetchUserData = (data) => dispatch => {

        dispatch({
            type: types.FETCH_USER_DATA,
            payload: data
        })


   
}