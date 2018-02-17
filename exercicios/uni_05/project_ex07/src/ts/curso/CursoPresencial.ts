import Curso from './Curso';
import CategoriaCursos from '../utils/CategoriaCurso';

class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome:string, cargaHoraria: number, categoria: CategoriaCursos, thumb: string, local:string = 'em breve', vagas:number = 99) {
        super(nome, cargaHoraria, categoria, thumb);
        this.local = local;
        this.vagas = vagas;
    }
}

export default CursoPresencial;