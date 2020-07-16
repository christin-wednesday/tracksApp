import { takeLatest, put } from 'redux-saga/effects';
import { trackListTypes, trackListCreators } from './reducer';

function* getTrackList() {
    try {
        yield put(trackListCreators.successFetchTrackList(data));
    } catch (error) {
        console.warn('fetch failure')
        yield put(trackListCreators.failureFetchTrackList(error.message))
    }
}
export function* trackListSaga() {
    yield takeLatest(trackListTypes.FETCH_TRACK_LIST, getTrackList)
}