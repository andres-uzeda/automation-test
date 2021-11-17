import { get } from 'request-promise-native';

const BASE_URL = "https://api.tvmaze.com/";

export function getAllShows() {
    return get(BASE_URL + 'search/shows?q=batman');
}

export function searchShow(filter: string) {
    return get(BASE_URL + 'search/shows?q=' + filter);
}