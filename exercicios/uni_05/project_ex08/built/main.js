System.register(["./utils/CategoriaCurso", "./curso/ListaCursoComponente", "./utils/TipoCurso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, ListaCursoComponente_1, TipoCurso_1, CursoApp, target, app;
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
            }
        ],
        execute: function () {
            CursoApp = /** @class */ (function () {
                function CursoApp(element) {
                    this.data = [
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20 },
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Sao Paulo', vagas: 10 },
                        { tipo: TipoCurso_1.default.ONLINE, nome: 'PhotoShop', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESIGN, link: 'http://www.imediabrasil.com.br' }
                    ];
                    this.target = element;
                    this.init();
                }
                CursoApp.prototype.init = function () {
                    this.listaCursoComponente = new ListaCursoComponente_1.default(this.data);
                    this.target.innerHTML = this.listaCursoComponente.render();
                };
                return CursoApp;
            }());
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
