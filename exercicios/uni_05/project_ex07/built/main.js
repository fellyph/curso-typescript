System.register(["./utils/CategoriaCurso", "./curso/CursoListComponent"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, CursoListComponent_1, CursoApp, target, app;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            },
            function (CursoListComponent_1_1) {
                CursoListComponent_1 = CursoListComponent_1_1;
            }
        ],
        execute: function () {
            CursoApp = /** @class */ (function () {
                function CursoApp(element) {
                    this.listaCursos = [
                        { nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, thumb: 'assets/img/typescript.jpg', local: 'Recife', vagas: 20 },
                        { nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, thumb: 'assets/img/javascript.jpg', link: 'http://imediabrasil.com.br' }
                    ];
                    this.element = element;
                    this.init();
                }
                CursoApp.prototype.init = function () {
                    this.cursos = new CursoListComponent_1.default(this.listaCursos);
                    this.element.innerHTML = this.cursos.render();
                };
                return CursoApp;
            }());
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
