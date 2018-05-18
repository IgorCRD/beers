import * as punkApi from 'core/api/punk-api';

export const OPEN_BEER_DETAILS = 'OPEN_BEER_DETAILS';
export const CLOSE_BEER_DETAILS = 'CLOSE_BEER_DETAILS';

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export const LOADING_PAGE = 'LOADING_PAGE';
export const LOADING_PAGE_FAILED = 'LOADING_PAGE_FAILED';
export const LOADING_PAGE_SUCCEEDED = 'LOADING_PAGE_SUCCEEDED';

export const SEARCH = 'SEARCH';

export function search(searchString) {
  return { type: SEARCH, searchString: searchString || '' };
}

export function openBeerDetails(id) {
  return { type: OPEN_BEER_DETAILS, id };
}

export function closeBeerDetails() {
  return { type: CLOSE_BEER_DETAILS };
}

export function nextPage() {
  return { type: NEXT_PAGE };
}

export function previousPage() {
  return { type: PREVIOUS_PAGE };
}

export function loadPage(dispatch) {
  return (numberOfBeers = 10, pageNumber = 1, filter = null) => {
    dispatch({ type: LOADING_PAGE, filter });
    try {
      punkApi
        .getBeersByPage(numberOfBeers, pageNumber, filter)
        .then(beers => dispatch({ type: LOADING_PAGE_SUCCEEDED, beers }))
        .catch(error => dispatch({ type: LOADING_PAGE_FAILED, error: error.message }));
    } catch (error) {
      dispatch({ type: LOADING_PAGE_FAILED, error });
    }
  };
}
