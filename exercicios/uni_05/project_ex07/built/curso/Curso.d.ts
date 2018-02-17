import ICurso from './ICurso';
declare class Curso implements ICurso {
    nome: string;
    cargaHoraria: number;
    categoria: string;
    thumb: string;
    constructor(nome: string, cargaHoraria: number, categoria: string, thumb: string);
}
export default Curso;
