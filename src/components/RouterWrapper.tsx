import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Application from './Application';

export default class RouterWrapper extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Application}/>
            </Router>
        );
    }
}
