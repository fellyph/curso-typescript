System.register(["./Componente"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Componente_1, ListaCursoComponente;
    return {
        setters: [
            function (Componente_1_1) {
                Componente_1 = Componente_1_1;
            }
        ],
        execute: function () {
            ListaCursoComponente = class ListaCursoComponente extends Componente_1.default {
                constructor(lista) {
                    super();
                    this.template = document.createElement('div');
                    this.template.classList.add('row cursos');
                    this.cursos = lista;
                }
                render() {
                    this.cursos.forEach(item => {
                        this.template.appendChild(item.render());
                    });
                    return this.template;
                }
            };
            exports_1("default", ListaCursoComponente);
        }
    };
});
//# sourceMappingURL=ListaCursoComponente.js.map