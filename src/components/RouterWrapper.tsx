import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Application from './Application';
import TopNavBar from "./cmp-top/TopNavBar";
import MainSpaceWrapper from "./cmp-middle/MainSpaceWrapper";
import Footer from "./cmp-bottom/Footer";
import HomePageMid from "./cmp-middle/HomePageMid";

export default class RouterWrapper extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Application>
                        <TopNavBar/>
                        <Route exact path="/" component={HomePageMid}/>
                        <Route path="/teach-app" component={MainSpaceWrapper}/>
                        <Footer/>
                    </Application>
                </div>
            </Router>
        );
    }
}