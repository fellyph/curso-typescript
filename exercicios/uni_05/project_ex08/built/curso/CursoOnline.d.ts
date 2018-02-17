import Curso from './Curso';
declare class CursoOnline extends Curso {
    link: string;
    constructor(nome: string, cargaHoraria: number, categoria: string, link?: string);
    render(): string;
}
export default CursoOnline;
