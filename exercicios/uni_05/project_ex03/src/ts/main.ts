import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';
import CategoriaCurso from './utils/CategoriaCurso';
import Curso from './curso/Curso';

class CursoApp {
    private listaCursos = [
        {nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20},
        {nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, link: 'http://imediabrasil.com.br'}
    ];
}