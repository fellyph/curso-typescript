System.register(["./Curso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Curso_1, CursoPresencial;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoPresencial = class CursoPresencial extends Curso_1.default {
                constructor(nome, cargaHoraria, categoria, thumb, local = 'em breve', vagas = 99) {
                    super(nome, cargaHoraria, categoria, thumb);
                    this.local = local;
                    this.vagas = vagas;
                }
                render() {
                    return `<article class="col-sm-6 col-md-4 curso presencial ${this.categoria}">
        <div class="card">
            <img class="responsive-img" src="assets/img/javascript.jpg">
            <div class="card-block">
                <h4 class="card-title">${this.nome}</h4>
                <p class="card-text">${this.cargaHoraria}h de curso  - ${this.vagas} vagas</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
            </div>
        </div>
    </article>`;
                }
            };
            exports_1("default", CursoPresencial);
        }
    };
});
//# sourceMappingURL=CursoPresencial.js.map