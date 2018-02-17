import ICurso from './ICurso';
declare class CursosListComponent {
    private cursos;
    constructor(cursos: any);
    render(): String;
    factory(curso: any): ICurso;
}
export default CursosListComponent;
