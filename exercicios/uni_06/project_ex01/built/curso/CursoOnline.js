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
                render() {
                    return `<article class="col-sm-6 col-md-4 curso online ${this.categoria}">
        <div class="card">
            <img class="responsive-img" src="assets/img/javascript.jpg">
            <div class="card-block">
                <h4 class="card-title">${this.nome}</h4>
                <p class="card-text">${this.cargaHoraria}h de curso</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
                <a href="${this.link}" class="btn btn-primary">Acessar</a>
            </div>
        </div>
    </article>`;
                }
            };
            exports_1("default", CursoOnline);
        }
    };
});
