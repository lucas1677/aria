import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {push, RouterAction} from 'react-router-redux';
import LocationDescriptor = History.LocationDescriptor;

import {History} from 'history';
type PropsType = {
  pushPath: (location: LocationDescriptor, state?: any) => RouterAction;
};

class Footer extends React.Component<PropsType> {
  render() {
    return (
      <div>
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
        <button onClick={() => this.props.pushPath('dash')}>go ?</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({}),
  {pushPath: push}
)(Footer);
