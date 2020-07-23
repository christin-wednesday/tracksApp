import {createActions} from 'reduxsauce';

export const initialState = {savedArtists: []};

export const {
  Types: addArtistTypes,
  Creators: addArtistCreators,
} = createActions({
  saveArtist: ['data'],
});

export const addArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case trackListTypes.SAVE_ARTIST:
      return {...state, savedArtists: [...savedArtists, action.data]};
    default:
      return state;
  }
};
