import Curso from './Curso';
import CategoriaCursos from '../utils/CategoriaCurso';

class CursoOnline extends Curso {
    link: string;
    constructor( nome:string, cargaHoraria: number, categoria: CategoriaCursos, thumb: string, link:string = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria, thumb);
        this.link = link;
    }
}

export default CursoOnline;