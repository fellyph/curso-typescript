System.register(["./Curso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Curso_1, CursoOnline;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoOnline = class CursoOnline extends Curso_1.default {
                constructor(nome, cargaHoraria, categoria, thumb, link = 'http://www.imediabrasil.com.br') {
                    super(nome, cargaHoraria, categoria, thumb);
                    this.link = link;
                }
            };
            exports_1("default", CursoOnline);
        }
    };
});
//# sourceMappingURL=CursoOnline.js.map