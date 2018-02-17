System.register(["./Componente"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Componente_1, CursoPresencialComponente;
    return {
        setters: [
            function (Componente_1_1) {
                Componente_1 = Componente_1_1;
            }
        ],
        execute: function () {
            CursoPresencialComponente = class CursoPresencialComponente extends Componente_1.default {
                constructor(curso) {
                    super();
                    this.curso = curso;
                    this.template = document.createElement('article');
                    this.template.className = 'col-sm-6 col-md-4 curso presencial';
                }
                render() {
                    this.template.innerHTML = `
        <div class="card">
            <img class="responsive-img" src="${this.curso.thumb}">
            <div class="card-block">
                <h4 class="card-title">${this.curso.nome}</h4>
                <p class="card-text">${this.curso.cargaHoraria}h de curso - ${this.curso.vagas} Vagas - Local: ${this.curso.local}</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
            </div>
        </div>`;
                    return this.template;
                }
            };
        }
    };
});
//# sourceMappingURL=CursoPresencialComponente.js.map