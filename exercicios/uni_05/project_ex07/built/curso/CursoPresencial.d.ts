import Curso from './Curso';
import CategoriaCursos from '../utils/CategoriaCurso';
declare class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome: string, cargaHoraria: number, categoria: CategoriaCursos, thumb: string, local?: string, vagas?: number);
}
export default CursoPresencial;
