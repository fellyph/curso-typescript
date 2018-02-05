import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';

let cursoPresencialTS = new CursoPresencial('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB, 'Recife', 20);
let cursoPresencialJS = new CursoPresencial('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
let cursoOnlinePS = new CursoOnline('PhotoShop', 40, CategoriaCursos.DESIGN, 'http://www.imediabrasil.com.br');
