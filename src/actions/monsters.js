export const SET_MONSTERS = 'SET_MONSTERS'

export function setMonsters(monsters) {
  return {
    type: SET_MONSTERS,
    monsters
  }
}