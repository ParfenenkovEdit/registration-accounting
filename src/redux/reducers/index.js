import sidebarReducer from './sidebarReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({ sidebar: sidebarReducer });

export default reducer;