import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const  env  =  require('../env.json')

const initialState = {}
const middleware = [thunk]

const compose_prod = compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const compose_dev = compose(applyMiddleware(...middleware))

const store = createStore(rootReducer, initialState, 
   env.prod ? compose_prod : compose_dev
    )

export {store, Provider};