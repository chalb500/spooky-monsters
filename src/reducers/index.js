import { combineReducers } from 'redux'
import monsters from './monsters'
import favorite from './favorite'

export default combineReducers({
  monsters,
  favorite
})