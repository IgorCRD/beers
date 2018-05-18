import React from 'react';
import PropTypes from 'prop-types';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'src/app-reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, undefined, composeEnhancers());

const normalize = () => injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    background-color: white;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  #app {
    height: 100vh;
    width: 100%;
  }
`;

const Application = ({ children }) => {
  normalize();
  return (
    <Provider store={store}>
      <React.Fragment>{children}</React.Fragment>
    </Provider>
  );
};
Application.propTypes = {
  children: PropTypes.element,
};
Application.defaultProps = {
  children: null,
};

export default Application;
