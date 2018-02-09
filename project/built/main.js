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
                        { nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, thumb: 'assets/img/typescript.jpg', local: 'Recife', vagas: 20 },
                        { nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, thumb: 'assets/img/javascript.jpg', link: 'http://imediabrasil.com.br' }
                    ];
                    this.element = element;
                    this.init();
                }
                CursoApp.prototype.init = function () {
                    var _this = this;
                    this.element.innerHTML = '<div class="lista-cursos row">';
                    this.listaCursos.forEach(function (item) {
                        _this.element.innerHTML += "<article class=\"col-sm-6 col-md-4 curso presencial\">\n           <div class=\"card\">\n               <img class=\"responsive-img\" src=\"" + item.thumb + "\">\n               <div class=\"card-block\">\n                   <h4 class=\"card-title\">" + item.nome + "</h4>\n                   <p class=\"card-text\">" + item.cargaHoraria + "h de curso - " + item.categoria + "</p>\n                   <a href=\"#\" class=\"btn btn-primary\"><i class=\"fas fa-heart\"></i> Favoritar</a>\n               </div>\n           </div>\n       </article>";
                    });
                    this.element.innerHTML += '</div>';
                };
                return CursoApp;
            }());
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
