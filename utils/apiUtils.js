import { create } from 'apisauce';

const api = create({
    baseURL: 'https://itunes.apple.com',
})

export async function getiTunesSearchResults(searchKeyWord = 'Pink') {
    return api
    .get('search?term=pink', {
            params: {
                term: 'pink'
            }
        })
    .then(response => response.data);
}