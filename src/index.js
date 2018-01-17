"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var RouterWrapper_1 = require("./components/RouterWrapper");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var appReducers = require("./reducers");
var store = redux_1.createStore(appReducers.default);
ReactDom.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(RouterWrapper_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map