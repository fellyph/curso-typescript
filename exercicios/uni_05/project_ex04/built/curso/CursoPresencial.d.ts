import Curso from './Curso';
declare class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome: string, cargaHoraria: number, categoria: string, local?: string, vagas?: number);
}
export default CursoPresencial;
