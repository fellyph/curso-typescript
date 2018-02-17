import Curso from './Curso';
declare class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome: string, cargaHoraria: number, categoria: string, thumb: string, local?: string, vagas?: number);
    render(): string;
}
export default CursoPresencial;
