import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'home/containers/home';

const HomeRouter = () => <Route exact path="/" component={Home} />;

export default HomeRouter;
