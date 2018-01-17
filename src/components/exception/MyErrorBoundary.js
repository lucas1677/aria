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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LogSupport_1 = require("../log/LogSupport");
var MyErrorBoundary = /** @class */ (function (_super) {
    __extends(MyErrorBoundary, _super);
    function MyErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    MyErrorBoundary.prototype.componentDidCatch = function (error, info) {
        this.setState(function (state) { return (__assign({}, state, { hasError: true })); });
        LogSupport_1.sendToErrorReporting(error, info);
    };
    MyErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            return React.createElement("div", null, "Sorry, something went wrong.");
        }
        else {
            return this.props.children;
        }
    };
    return MyErrorBoundary;
}(React.Component));
//# sourceMappingURL=MyErrorBoundary.js.map