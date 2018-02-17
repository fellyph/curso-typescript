System.register(["./Curso", "./CursoOnline", "./CursoPresencial", "../utils/TipoCurso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Curso_1, CursoOnline_1, CursoPresencial_1, TipoCurso_1, CursosListComponent;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            },
            function (CursoOnline_1_1) {
                CursoOnline_1 = CursoOnline_1_1;
            },
            function (CursoPresencial_1_1) {
                CursoPresencial_1 = CursoPresencial_1_1;
            },
            function (TipoCurso_1_1) {
                TipoCurso_1 = TipoCurso_1_1;
            }
        ],
        execute: function () {
            CursosListComponent = /** @class */ (function () {
                function CursosListComponent(cursos) {
                    var _this = this;
                    this.cursos = [];
                    cursos.forEach(function (element) {
                        _this.cursos.push(_this.factory(element));
                    });
                }
                CursosListComponent.prototype.render = function () {
                    var listaContent = '<div class="row">';
                    this.cursos.forEach(function (item) {
                        listaContent += item.render();
                    });
                    listaContent += '</div>';
                    return listaContent;
                };
                CursosListComponent.prototype.factory = function (curso) {
                    console.log(typeof curso.link !== 'undefined');
                    switch (curso.tipo) {
                        case TipoCurso_1.default.ONLINE:
                            return new CursoOnline_1.default(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.link);
                        case TipoCurso_1.default.PRESENCIAL:
                            return new CursoPresencial_1.default(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.local, curso.vagas);
                        default:
                            return new Curso_1.default(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb);
                    }
                };
                return CursosListComponent;
            }());
            exports_1("default", CursosListComponent);
        }
    };
});
