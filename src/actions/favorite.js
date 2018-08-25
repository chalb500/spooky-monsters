export const GET_FAVORITE = 'GET_FAVORITE'

export function setFavorite(favorite) {
  return {
    type: GET_FAVORITE,
    favorite
  }
}