import {applyMiddleware, createStore} from 'redux'
import RechercherData from '../Reducers/ReducerRecherche'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(RechercherData, composeWithDevTools(applyMiddleware(thunk)))

export default store