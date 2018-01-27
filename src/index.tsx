import * as React from 'react';
import * as ReactDom from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import reducers from '@src/reducers';

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import createHistory from 'history/createHashHistory'
import {Route} from 'react-router'

import HomePageMid from "@src/components/cmp-middle/HomePageMid";
import MainSpaceWrapper from "@src/components/cmp-middle/MainSpaceWrapper";
import Application from "@src/components/Application";
import TopNavBar from "@src/components/cmp-top/TopNavBar";
import Footer from "@src/components/cmp-bottom/Footer";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Application>
                    <TopNavBar/>
                    <span onClick={() => store.dispatch(push('/'))}>22</span>
                    <Route exact path="/" component={HomePageMid}/>
                    <Route path="/teach-app" component={MainSpaceWrapper}/>
                    <Footer/>
                </Application>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);