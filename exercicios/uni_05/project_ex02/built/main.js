System.register(["./utils/CategoriaCurso", "./curso/CursoPresencial"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CategoriaCurso_1, CursoPresencial_1, cursoPresencialTS, cursoPresencialJS;
    return {
        setters: [
            function (CategoriaCurso_1_1) {
                CategoriaCurso_1 = CategoriaCurso_1_1;
            },
            function (CursoPresencial_1_1) {
                CursoPresencial_1 = CursoPresencial_1_1;
            }
        ],
        execute: function () {
            cursoPresencialTS = new CursoPresencial_1.default('Typescript', 40, CategoriaCurso_1.default.DESENVOLVIMENTO_WEB, 'Recife', 20);
            cursoPresencialJS = new CursoPresencial_1.default('JavaScript', 40, CategoriaCurso_1.default.DESENVOLVIMENTO_WEB);
            alert('test');
        }
    };
});
