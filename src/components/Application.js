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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.increment = function () {
            _this.setState({
                count: _this.state.count + 1
            });
        };
        _this.state = {
            count: 0
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { onClick: this.increment },
            this.props.message,
            this.state.count));
    };
    return App;
}(React.Component));
exports.App = App;
exports.default = App;
//# sourceMappingURL=Application.js.map