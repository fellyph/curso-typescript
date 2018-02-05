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
exports.__esModule = true;
var Curso_1 = require("./Curso");
var CursoOnline = /** @class */ (function (_super) {
    __extends(CursoOnline, _super);
    function CursoOnline(nome, cargaHoraria, categoria, link) {
        if (link === void 0) { link = 'http://www.imediabrasil.com.br'; }
        var _this = _super.call(this, nome, cargaHoraria, categoria) || this;
        _this.link = link;
        return _this;
    }
    return CursoOnline;
}(Curso_1["default"]));
exports["default"] = CursoOnline;
