import Curso from './Curso';

class CursoOnline extends Curso {
    link: string;
    constructor( nome:string, cargaHoraria: number, categoria: string, thumb:string, link:string = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria, thumb);
        this.link = link;
    }
}

export default CursoOnline;