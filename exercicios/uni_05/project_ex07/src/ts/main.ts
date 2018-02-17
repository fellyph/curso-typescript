import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';
import CategoriaCurso from './utils/CategoriaCurso';
import CursoListComponent from './curso/CursoListComponent';

import Curso from './curso/Curso';

class CursoApp {
    private cursos: CursoListComponent;
    private listaCursos = [
        {nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, thumb: 'assets/img/typescript.jpg', local: 'Recife', vagas: 20},
        {nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, thumb: 'assets/img/javascript.jpg', link: 'http://imediabrasil.com.br'}
    ];
    private element;

    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.cursos = new CursoListComponent(this.listaCursos);
        this.element.innerHTML = this.cursos.render();
    }
}

let target = document.getElementById('app');
let app = new CursoApp(target);
