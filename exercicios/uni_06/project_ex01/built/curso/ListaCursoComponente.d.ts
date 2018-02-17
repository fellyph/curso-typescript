import ICurso from "./ICurso";
declare class ListaCursoComponente {
    private cursos;
    constructor(lista: any);
    factory(item: any): ICurso;
    render(): string;
}
export default ListaCursoComponente;
