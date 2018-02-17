System.register(["./Curso"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var Curso_1, CursoOnline;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoOnline = /** @class */ (function (_super) {
                __extends(CursoOnline, _super);
                function CursoOnline(nome, cargaHoraria, categoria, link) {
                    if (link === void 0) { link = 'http://www.imediabrasil.com.br'; }
                    var _this = _super.call(this, nome, cargaHoraria, categoria) || this;
                    _this.link = link;
                    return _this;
                }
                CursoOnline.prototype.render = function () {
                    return "<article class=\"col-sm-6 col-md-4 curso online " + this.categoria + "\">\n        <div class=\"card\">\n            <img class=\"responsive-img\" src=\"assets/img/javascript.jpg\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title\">" + this.nome + "</h4>\n                <p class=\"card-text\">" + this.cargaHoraria + "h de curso</p>\n                <a href=\"#\" class=\"btn btn-primary\"><i class=\"fas fa-heart\"></i> Favoritar</a>\n                <a href=\"" + this.link + "\" class=\"btn btn-primary\">Acessar</a>\n            </div>\n        </div>\n    </article>";
                };
                return CursoOnline;
            }(Curso_1.default));
            exports_1("default", CursoOnline);
        }
    };
});
