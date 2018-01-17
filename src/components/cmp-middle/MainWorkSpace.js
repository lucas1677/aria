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
    backgroundColor: '#BBB',
    minHeight: '500px'
});
var MainWorkSpace = /** @class */ (function (_super) {
    __extends(MainWorkSpace, _super);
    function MainWorkSpace(props) {
        return _super.call(this, props) || this;
    }
    MainWorkSpace.prototype.render = function () {
        return (React.createElement("div", { className: componentBaseStyle }));
    };
    return MainWorkSpace;
}(React.Component));
exports.default = MainWorkSpace;
//# sourceMappingURL=MainWorkSpace.js.map