import * as beerListActions from 'beer-list/actions/beer-list-actions';

const initialState = {
  loadingState: 'initial',
  page: 1,
  filter: null,
  itemsPerPage: 2,
  beers: [],
};

const beerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case beerListActions.LOADING_PAGE_SUCCEEDED: {
      return { ...state, beers: action.beers, loadingState: 'success' };
    }
    case beerListActions.LOADING_PAGE_FAILED: {
      return { ...state, loadingState: 'fail' };
    }
    case beerListActions.LOADING_PAGE: {
      return { ...state, loadingState: 'loading', filter: action.filter };
    }
    default:
      return state;
  }
};

export default beerListReducer;