import * as React from 'react';
import * as ReactDom from 'react-dom';

import {createHashHistory as createHistory} from 'history';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import TodoApp from '@src/components/todo-app/TodoApp';
import normalizeStyle from '@src/resource/css/normalize.css';
import reducers from '@src/reducers';
import {cssRaw} from 'typestyle';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    applyMiddleware(middleware)
);

cssRaw(`${normalizeStyle}`);

const state = {
    todos: [
        {id: 1, name: 'Render static UI', isComplete: true},
        {id: 2, name: 'Create initial state', isComplete: true},
        {id: 3, name: 'Render based on state', isComplete: true},
    ],
};

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path={'/'}>
                <TodoApp todos={state.todos}/>
            </Route>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
