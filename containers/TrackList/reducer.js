import produce from 'immer';
import { fromJS } from 'immutable'
import { createActions } from 'reduxsauce';

export const initialState = {trackList: [], error: {}, loading: false}

export const { Types: trackListTypes, Creators: trackListCreators} = createActions({
    fetchTrackList: ['payload'],
    successFetchTrackList: ['trackList'],
    failureFetchTrackList: ['error'],
    clearTrackList:[]
});

export const trackListReducer = (state = initialState, action) =>{
        switch (action.type) {
            case  trackListTypes.FETCH_TRACK_LIST:
                return {...state, loading: true};
            case trackListTypes.SUCCESS_FETCH_TRACK_LIST:
                return {...state, trackList: action.trackList, loading: false}
            case trackListTypes.FAILURE_FETCH_TRACK_LIST:
                return {...state, error: action.error, loading: false}
            case trackListTypes.CLEAR_TRACK_LIST:
                return {...state, trackList: []};
            default:
                return state;
        }
    };
