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
var typestyle_1 = require("typestyle");
var componentBaseStyle = typestyle_1.style({
    height: '40px',
    backgroundColor: '#666',
});
var TopWrapper = /** @class */ (function (_super) {
    __extends(TopWrapper, _super);
    function TopWrapper(props) {
        return _super.call(this, props) || this;
    }
    TopWrapper.prototype.render = function () {
        return (React.createElement("div", { className: componentBaseStyle }));
    };
    return TopWrapper;
}(React.Component));
exports.default = TopWrapper;
//# sourceMappingURL=TopBanner.js.map