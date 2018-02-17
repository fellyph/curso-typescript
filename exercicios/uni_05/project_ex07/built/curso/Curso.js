System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Curso;
    return {
        setters: [],
        execute: function () {
            Curso = /** @class */ (function () {
                function Curso(nome, cargaHoraria, categoria, thumb) {
                    this.nome = nome;
                    this.cargaHoraria = cargaHoraria;
                    this.categoria = categoria;
                    this.thumb = thumb;
                }
                return Curso;
            }());
            exports_1("default", Curso);
        }
    };
});
