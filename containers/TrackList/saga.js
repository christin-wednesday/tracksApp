import {takeLatest, put, call} from 'redux-saga/effects';
import {getiTunesSearchResults} from '../../utils/apiUtils';
import {trackListTypes, trackListCreators} from './reducer';

function* getTrackList(action) {
  try {
    const data = yield call(getiTunesSearchResults, action.payload);
    yield put(trackListCreators.successFetchTrackList(data.results));
  } catch (error) {
    console.warn('fetch failed');
    yield put(trackListCreators.failureFetchTrackList(error.message));
  }
}
export function* trackListSaga() {
  yield takeLatest(trackListTypes.FETCH_TRACK_LIST, getTrackList);
}
