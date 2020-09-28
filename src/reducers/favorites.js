const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_FAVORITES':
      return action.favorites;
    case 'ADD_FAVORITE':
      return [...state, action.favorite];
    case 'REMOVE_FAVORITE':
      return state.filter((favorite) => favorite.id !== action.id);
    case 'CLEAR_FAVORITES':
      return [];
    default:
      return state;
  }
};

export default favoritesReducer;
