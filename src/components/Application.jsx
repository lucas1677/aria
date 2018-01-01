import React from 'react';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    222
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default App;
