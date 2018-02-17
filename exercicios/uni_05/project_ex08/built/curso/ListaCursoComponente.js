System.register(["../utils/TipoCurso", "./Curso", "./CursoOnline", "./CursoPresencial"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TipoCurso_1, Curso_1, CursoOnline_1, CursoPresencial_1, ListaCursoComponente;
    return {
        setters: [
            function (TipoCurso_1_1) {
                TipoCurso_1 = TipoCurso_1_1;
            },
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            },
            function (CursoOnline_1_1) {
                CursoOnline_1 = CursoOnline_1_1;
            },
            function (CursoPresencial_1_1) {
                CursoPresencial_1 = CursoPresencial_1_1;
            }
        ],
        execute: function () {
            ListaCursoComponente = /** @class */ (function () {
                function ListaCursoComponente(lista) {
                    var _this = this;
                    this.cursos = [];
                    lista.forEach(function (element) {
                        _this.cursos.push(_this.factory(element));
                    });
                }
                ListaCursoComponente.prototype.factory = function (item) {
                    switch (item.tipo) {
                        case TipoCurso_1.default.ONLINE:
                            return new CursoOnline_1.default(item.nome, item.cargaHoraria, item.categoria, item.link);
                        case TipoCurso_1.default.PRESENCIAL:
                            return new CursoPresencial_1.default(item.nome, item.cargaHoraria, item.categoria, item.local, item.vagas);
                        default:
                            return new Curso_1.default(item.nome, item.cargaHoraria, item.categoria);
                    }
                };
                ListaCursoComponente.prototype.render = function () {
                    var content = '<div class="row">';
                    this.cursos.forEach(function (item) {
                        content += item.render();
                    });
                    content += '</div>';
                    return content;
                };
                return ListaCursoComponente;
            }());
            exports_1("default", ListaCursoComponente);
        }
    };
});
