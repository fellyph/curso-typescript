import Curso from './Curso';

class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome:string, cargaHoraria: number, categoria: string, local:string = 'em breve', vagas:number = 99) {
        super(nome, cargaHoraria, categoria);
        this.local = local;
        this.vagas = vagas;
    }
}

export default CursoPresencial;