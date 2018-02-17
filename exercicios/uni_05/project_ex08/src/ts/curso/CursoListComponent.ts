import Curso from './Curso';
import ICurso from './ICurso';
import CursoOnline from './CursoOnline';
import CursoPresencial from './CursoPresencial';
import TipoCurso from '../utils/TipoCurso';

class CursosListComponent {
    private cursos:Array<ICurso> = [];
    constructor(cursos) {
        cursos.forEach(element => {
           this.cursos.push(this.factory(element));
        });
    }
    
    factory(curso):ICurso {
        console.log(typeof curso.link !== 'undefined')
        switch (curso.tipo) {
            case TipoCurso.ONLINE:
                return new CursoOnline(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.link);
            case TipoCurso.PRESENCIAL:
                return new CursoPresencial(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.local, curso.vagas);
            default:
                return new Curso(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb);
        }
    }

    render():String {
        let listaContent = '<div class="row">';
        this.cursos.forEach(item => {
           listaContent += item.render();
        });
        listaContent += '</div>';
        return listaContent;
    }

}

export default CursosListComponent;