import * as beerListActions from 'beer-list/actions/beer-list-actions';

const initialState = {
  loadingState: 'initial',
  errorMsg: '',
  page: 1,
  filter: '',
  itemsPerPage: 10,
  beerModal: undefined,
  beers: [],
};

const beerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case beerListActions.SEARCH: {
      return { ...state, filter: action.searchString, page: 1 };
    }
    case beerListActions.CLOSE_BEER_DETAILS: {
      return { ...state, beerModal: undefined };
    }
    case beerListActions.OPEN_BEER_DETAILS: {
      return { ...state, beerModal: action.id };
    }
    case beerListActions.NEXT_PAGE: {
      return { ...state, page: state.page + 1 };
    }
    case beerListActions.PREVIOUS_PAGE: {
      return { ...state, page: Math.max(state.page - 1, 1) };
    }
    case beerListActions.LOADING_PAGE_SUCCEEDED: {
      return {
        ...state,
        beers: action.beers,
        loadingState: 'success',
        page: action.beers.length === 0 ? Math.max(state.page - 1, 1) : state.page,
      };
    }
    case beerListActions.LOADING_PAGE_FAILED: {
      return { ...state, loadingState: 'fail', errorMsg: action.error };
    }
    case beerListActions.LOADING_PAGE: {
      return { ...state, loadingState: 'loading', filter: action.filter };
    }
    default:
      return state;
  }
};

export default beerListReducer;
