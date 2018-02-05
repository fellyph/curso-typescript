System.register("utils/CategoriaCurso", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCursos;
    return {
        setters: [],
        execute: function () {
            (function (CategoriaCursos) {
                CategoriaCursos["DESENVOLVIMENTO"] = "desenvolvimento";
                CategoriaCursos["DESENVOLVIMENTO_WEB"] = "desenvolvimento_web";
                CategoriaCursos["DESIGN"] = "design";
                CategoriaCursos["MARKETING"] = "marketing";
            })(CategoriaCursos || (CategoriaCursos = {}));
            exports_1("default", CategoriaCursos);
        }
    };
});
System.register("curso/ICurso", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("curso/Curso", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Curso;
    return {
        setters: [],
        execute: function () {
            Curso = class Curso {
                constructor(nome, cargaHoraria, categoria) {
                    this.nome = nome;
                    this.cargaHoraria = cargaHoraria;
                    this.categoria = categoria;
                }
            };
            exports_3("default", Curso);
        }
    };
});
System.register("curso/CursoOnline", ["curso/Curso"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Curso_1, CursoOnline;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoOnline = class CursoOnline extends Curso_1.default {
                constructor(nome, cargaHoraria, categoria, link = 'http://www.imediabrasil.com.br') {
                    super(nome, cargaHoraria, categoria);
                    this.link = link;
                }
            };
            exports_4("default", CursoOnline);
        }
    };
});
System.register("curso/CursoPresencial", ["curso/Curso"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Curso_2, CursoPresencial;
    return {
        setters: [
            function (Curso_2_1) {
                Curso_2 = Curso_2_1;
            }
        ],
        execute: function () {
            CursoPresencial = class CursoPresencial extends Curso_2.default {
                constructor(nome, cargaHoraria, categoria, local = 'em breve', vagas = 99) {
                    super(nome, cargaHoraria, categoria);
                    this.local = local;
                    this.vagas = vagas;
                }
            };
            exports_5("default", CursoPresencial);
        }
    };
});
System.register("main", ["utils/CategoriaCurso", "curso/CursoOnline", "curso/CursoPresencial"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var CategoriaCurso_1, CursoOnline_1, CursoPresencial_1, cursoPresencialTS, cursoPresencialJS, cursoOnlinePS;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            },
            function (CursoOnline_1_1) {
                CursoOnline_1 = CursoOnline_1_1;
            },
            function (CursoPresencial_1_1) {
                CursoPresencial_1 = CursoPresencial_1_1;
            }
        ],
        execute: function () {
            cursoPresencialTS = new CursoPresencial_1.default('Typescript', 40, CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, 'Recife', 20);
            cursoPresencialJS = new CursoPresencial_1.default('JavaScript', 40, CategoriaCurso_1.default.DESENVOLVIMENTO_WEB);
            cursoOnlinePS = new CursoOnline_1.default('PhotoShop', 40, CategoriaCurso_1.default.DESIGN, 'http://www.imediabrasil.com.br');
        }
    };
});
//# sourceMappingURL=main.js.map