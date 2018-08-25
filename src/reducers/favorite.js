import { GET_FAVORITE } from '../actions/favorite'

export default function favorite (state = '', action) {
  switch(action.type) {
    case GET_FAVORITE:
      return 'This one is my favorite'
    default:
      return state
  }
}