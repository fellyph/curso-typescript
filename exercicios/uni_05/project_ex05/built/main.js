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
                    var _this = this;
                    this.element.innerHTML = '<ul>';
                    this.listaCursos.forEach(function (item) {
                        _this.element.innerHTML += "<li>" + item.nome + "</li>";
                    });
                    this.element.innerHTML += '</ul>';
                };
                return CursoApp;
            }());
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
