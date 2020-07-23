import {create} from 'apisauce';

const api = create({
  baseURL: 'https://itunes.apple.com',
});

export async function getiTunesSearchResults(searchKeyWord = 'Pink Floyd') {
  return api
    .get('search', {
      term: searchKeyWord,
    })
    .then((response) => response.data);
}
