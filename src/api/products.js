import makeRequest from './helpers/makeRequest';

function all() {
    return makeRequest('products/?limit=9');
}

export { all };