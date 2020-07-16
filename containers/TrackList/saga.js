import { takeLatest, put } from 'redux-saga/effects';
import { trackListTypes, trackListCreators } from './reducer';

function* getTrackList() {
    try {
        const data = [{
            artistName: 'Pink Floyd',
            albumArtUri:'https://upload.wikimedia.org/wikipedia/en/9/95/Highhopes.jpg'
        }]
        yield put(trackListCreators.successFetchTrackList(data));
    } catch (error) {
        console.warn('fetch failed')
        yield put(trackListCreators.failureFetchTrackList(error.message))
    }
}
export function* trackListSaga() {
    yield takeLatest(trackListTypes.FETCH_TRACK_LIST, getTrackList)
}