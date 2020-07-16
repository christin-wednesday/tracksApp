import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

const selectTrackListDomain = state =>
    (state.trackList || initialState).toJS();

export const selectTrackList = () =>
    createSelector(
        selectTrackListDomain,
        substate => get(substate, 'trackList')
    )