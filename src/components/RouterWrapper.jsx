import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Application from './Application';

const Root = () => (
  <Router>
    <Route path="/" component={Application}/>
  </Router>
);

Root.propTypes = {
};

export default Root;
