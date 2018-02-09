import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';
import CategoriaCurso from './utils/CategoriaCurso';
import Curso from './curso/Curso';

let cursoPresencialTS = new CursoPresencial('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB, 'Recife', 20);
let cursoPresencialJS = new CursoPresencial('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);

alert('test')