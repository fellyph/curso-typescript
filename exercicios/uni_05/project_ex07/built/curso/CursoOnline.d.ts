import Curso from './Curso';
import CategoriaCursos from '../utils/CategoriaCurso';
declare class CursoOnline extends Curso {
    link: string;
    constructor(nome: string, cargaHoraria: number, categoria: CategoriaCursos, thumb: string, link?: string);
}
export default CursoOnline;
