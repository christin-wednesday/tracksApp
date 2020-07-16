import produce from 'immer';
import { fromJS } from 'immutable'
import { createActions } from 'reduxsauce';

export const initialState = {trackList: [], error: {}}

export const { Types: trackListTypes, Creators: trackListCreators} = createActions({
    fetchTrackList: null,
    successFetchTrackList: ['trackList'],
    failureFetchTrackList: ['error']
});

export const trackListReducer = (state = initialState, action) =>{
        switch (action.type) {
            case  trackListTypes.FETCH_TRACK_LIST:
                return state;
            case trackListTypes.SUCCESS_FETCH_TRACK_LIST:
                return {...state, trackList: action.trackList}
            case trackListTypes.FAILURE_FETCH_TRACK_LIST:
                return {...state, error: action.error}
            default:
                return state;
        }
    };