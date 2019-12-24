import { types } from '../actions/userAuth.action'
import { isjwtValid} from '../../components/common/helper.service'

const {token, decoded, loggedIn} = isjwtValid()

const initialState = {
   
        loggedIn,
        token,
        decoded
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            
            return {
                ...state, loggedIn: true, token: action.payload.token, decoded: isjwtValid().decoded 
            }
        case types.LOGOUT:
            
            return {
                ...state, loggedIn: false, token: '', decoded: {}
            }
  
        default:
            return state;

    }

}