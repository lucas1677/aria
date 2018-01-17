"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Application_1 = require("./Application");
var LeftNavBar_1 = require("./cmp-middle/LeftNavBar");
var TopBanner_1 = require("./cmp-top/TopBanner");
var MainWorkSpace_1 = require("./cmp-middle/MainWorkSpace");
var MainSpaceWrapper_1 = require("./cmp-middle/MainSpaceWrapper");
var Footer_1 = require("./cmp-bottom/Footer");
var RouterWrapper = /** @class */ (function (_super) {
    __extends(RouterWrapper, _super);
    function RouterWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouterWrapper.prototype.render = function () {
        var supportsHistory = 'pushState' in window.history;
        return (React.createElement(react_router_dom_1.BrowserRouter, { basename: "/", forceRefresh: !supportsHistory, keyLength: 12 },
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: function () { return (React.createElement(Application_1.default, null,
                    React.createElement(TopBanner_1.default, null),
                    React.createElement(MainSpaceWrapper_1.default, null,
                        React.createElement(LeftNavBar_1.default, null),
                        React.createElement(MainWorkSpace_1.default, null)),
                    React.createElement(Footer_1.default, null))); } }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/App", component: function () { return (); } })));
    };
    return RouterWrapper;
}(React.Component));
exports.default = RouterWrapper;
//# sourceMappingURL=RouterWrapper.js.map