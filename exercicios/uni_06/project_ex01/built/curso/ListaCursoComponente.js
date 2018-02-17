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
            ListaCursoComponente = class ListaCursoComponente {
                constructor(lista) {
                    this.cursos = [];
                    lista.forEach(element => {
                        this.cursos.push(this.factory(element));
                    });
                }
                factory(item) {
                    switch (item.tipo) {
                        case TipoCurso_1.default.ONLINE:
                            return new CursoOnline_1.default(item.nome, item.cargaHoraria, item.categoria, item.link);
                        case TipoCurso_1.default.PRESENCIAL:
                            return new CursoPresencial_1.default(item.nome, item.cargaHoraria, item.categoria, item.local, item.vagas);
                        default:
                            return new Curso_1.default(item.nome, item.cargaHoraria, item.categoria, item.thumb);
                    }
                }
                render() {
                    let content = '<div class="row">';
                    this.cursos.forEach(item => {
                        content += item.render();
                    });
                    content += '</div>';
                    return content;
                }
            };
            exports_1("default", ListaCursoComponente);
        }
    };
});
