System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CursosListComponent;
    return {
        setters: [],
        execute: function () {
            CursosListComponent = /** @class */ (function () {
                function CursosListComponent(cursos) {
                    this.cursos = cursos;
                }
                CursosListComponent.prototype.render = function () {
                    var listaContent = '<div class="row">';
                    this.cursos.forEach(function (item) {
                        listaContent += "<article class=\"col-sm-6 col-md-4 curso presencial\">\n           <div class=\"card\">\n               <img class=\"responsive-img\" src=\"" + item.thumb + "\">\n               <div class=\"card-block\">\n                   <h4 class=\"card-title\">" + item.nome + "</h4>\n                   <p class=\"card-text\">" + item.cargaHoraria + "h de curso - " + item.categoria + "</p>\n                   <a href=\"#\" class=\"btn btn-primary\"><i class=\"fas fa-heart\"></i> Favoritar</a>\n               </div>\n           </div>\n       </article>";
                    });
                    listaContent += '</div>';
                    return listaContent;
                };
                return CursosListComponent;
            }());
            exports_1("default", CursosListComponent);
        }
    };
});
