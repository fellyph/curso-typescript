import ICurso from './ICurso';
declare class Curso implements ICurso {
    nome: string;
    cargaHoraria: number;
    categoria: string;
    constructor(nome: string, cargaHoraria: number, categoria: string, thumb: string);
    render(): void;
}
export default Curso;
