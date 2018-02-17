System.register(["./utils/CategoriaCurso", "./curso/ListaCursoComponente", "./utils/TipoCurso", "./service/FavoriteService", "./curso/Curso"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, ListaCursoComponente_1, TipoCurso_1, FavoriteService_1, Curso_1, CursoApp, target, app;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            },
            function (ListaCursoComponente_1_1) {
                ListaCursoComponente_1 = ListaCursoComponente_1_1;
            },
            function (TipoCurso_1_1) {
                TipoCurso_1 = TipoCurso_1_1;
            },
            function (FavoriteService_1_1) {
                FavoriteService_1 = FavoriteService_1_1;
            },
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoApp = class CursoApp {
                constructor(element) {
                    this.data = [
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20 },
                        { tipo: TipoCurso_1.default.PRESENCIAL, nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, local: 'Sao Paulo', vagas: 10 },
                        { tipo: TipoCurso_1.default.ONLINE, nome: 'PhotoShop', cargaHoraria: 40, categoria: CategoriaCurso_1.default.DESIGN, link: 'http://www.imediabrasil.com.br' }
                    ];
                    this.target = element;
                    this.favoriteData = new FavoriteService_1.default('favoritosDatabase');
                    let test = new Curso_1.default('test', 40, CategoriaCurso_1.default.DESENVOLVIMENTO, 'test.jpg');
                    this.favoriteData.save(test);
                    this.favoriteData.getAll();
                    this.init();
                }
                init() {
                    this.listaCursoComponente = new ListaCursoComponente_1.default(this.data);
                    this.target.innerHTML = this.listaCursoComponente.render();
                }
            };
            target = document.getElementById('app');
            app = new CursoApp(target);
        }
    };
});
