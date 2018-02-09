System.register(["./utils/CategoriaCurso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, CursoApp, target, app;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            }
        ],
        execute: function () {
            CursoApp = /** @class */ (function () {
                function CursoApp(element) {
                    this.listaCursos = [
                        { nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20 },
                        { nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, link: 'http://imediabrasil.com.br' }
                    ];
                    this.element = element;
                    this.init();
                }
                CursoApp.prototype.init = function () {
                    this.element.innerHTML = 'test';
                };
                return CursoApp;
            }());
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
