import punkApi from 'core/api/punk-api-wrapper';

export const OPEN_BEER_DETAILS = 'OPEN_BEER_DETAILS';
export const SHOW_PAGE = 'SHOW_PAGE';
export const LOADING_PAGE = 'LOADING_PAGE';
export const LOADING_PAGE_FAILED = 'LOADING_PAGE_FAILED';
export const LOADING_PAGE_SUCCEEDED = 'LOADING_PAGE_SUCCEEDED';

export function openBeerDetails(id) {
  return { type: OPEN_BEER_DETAILS, id };
}

export function loadPage(dispatch) {
  return (numberOfBeers = 10, pageNumber = 1, filter = null) => {
    dispatch({ type: LOADING_PAGE, filter });
    try {
      punkApi
        .getBeersByPage(numberOfBeers, pageNumber)
        .then(beers => dispatch({ type: LOADING_PAGE_SUCCEEDED, beers }))
        .catch(error => dispatch({ type: LOADING_PAGE_FAILED, error }));
    } catch (error) {
      dispatch({ type: LOADING_PAGE_FAILED, error });
    }
  };
}
