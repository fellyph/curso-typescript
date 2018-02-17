System.register(["./utils/CategoriaCurso", "./componentes/ListaCursoComponente", "./utils/TipoCurso", "./curso/Curso", "./curso/CursoOnline", "./curso/CursoPresencial"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, ListaCursoComponente_1, TipoCurso_1, Curso_1, CursoOnline_1, CursoPresencial_1, CursoApp, target, app;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            },
            function (ListaCursoComponente_1_1) {
                ListaCursoComponente_1 = ListaCursoComponente_1_1;
            },
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
            CursoApp = class CursoApp {
                constructor(element) {
                    this.data = [
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20 },
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Sao Paulo', vagas: 10 },
                        { tipo: TipoCurso_1.default.ONLINE, nome: 'PhotoShop', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESIGN, link: 'http://www.imediabrasil.com.br' }
                    ];
                    this.target = element;
                    this.listaCursos = [];
                    this.data.forEach(item => this.listaCursos.push(this.factoryCurso(item)));
                    this.init();
                }
                init() {
                    this.listaCursoComponente = new ListaCursoComponente_1.default(this.listaCursos);
                    this.target.innerHTML = this.listaCursoComponente.render();
                }
                factoryCurso(item) {
                    switch (item.tipo) {
                        case TipoCurso_1.default.ONLINE:
                            return new CursoOnline_1.default(item.nome, item.cargaHoraria, item.categoria, item.link);
                        case TipoCurso_1.default.PRESENCIAL:
                            return new CursoPresencial_1.default(item.nome, item.cargaHoraria, item.categoria, item.local, item.vagas);
                        default:
                            return new Curso_1.default(item.nome, item.cargaHoraria, item.categoria, item.thumb);
                    }
                }
            };
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
//# sourceMappingURL=main.js.map