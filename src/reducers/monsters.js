import { SET_MONSTERS } from '../actions/monsters'

export default function monsters (state = {}, action) {
  switch (action.type) {
    case SET_MONSTERS :
      return {
        ...state,
        ...action.monsters
      }
      default :
        return state
  }
}