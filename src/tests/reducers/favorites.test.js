import favoritesReducer from '../../reducers/favorites';
import favorites from '../fixtures/favorites';

describe('favorites reducer', () => {
  it('clears favorites', () => {
    const action = { type: 'CLEAR_FAVORITES' };
    const state = favoritesReducer(favorites, action);
    expect(state).toEqual([]);
  });

  it('adds a favorite', () => {
    const action = { type: 'ADD_FAVORITE', favorite: favorites[1] };
    const state = favoritesReducer([favorites[0]], action);
    expect(state).toEqual([favorites[0], favorites[1]]);
  });

  it('adds a favorite', () => {
    const action = { type: 'REMOVE_FAVORITE', id: favorites[1].id };
    const state = favoritesReducer([favorites[0], favorites[1], favorites[2]], action);
    expect(state).toEqual([favorites[0], favorites[2]]);
  });

  it('populates favorites', () => {
    const action = { type: 'POPULATE_FAVORITES', favorites };
    const state = favoritesReducer([], action);
    expect(state).toEqual(favorites);
  });

  it('default case', () => {
    const action = { type: 'BAD_ACTION' };
    const state = favoritesReducer(favorites, action);
    expect(state).toEqual(favorites);
  });
});
