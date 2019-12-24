import { types } from '../actions/userData.action'

const initialState = {

}

export default (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_USER_DATA:
        
            return {
                ...state, ...action.payload
            }
            default:
                return state;
       
    }

}