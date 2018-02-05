"use strict";
exports.__esModule = true;
var CategoriaCurso_1 = require("./utils/CategoriaCurso");
var CursoOnline_1 = require("./curso/CursoOnline");
var CursoPresencial_1 = require("./curso/CursoPresencial");
var cursoPresencialTS = new CursoPresencial_1["default"]('Typescript', 40, CategoriaCurso_1["default"].DESENVOLVIMENTO_WEB, 'Recife', 20);
var cursoPresencialJS = new CursoPresencial_1["default"]('JavaScript', 40, CategoriaCurso_1["default"].DESENVOLVIMENTO_WEB);
var cursoOnlinePS = new CursoOnline_1["default"]('PhotoShop', 40, CategoriaCurso_1["default"].DESIGN, 'http://www.imediabrasil.com.br');
