import ICurso from './ICurso';

class Curso implements ICurso {
    constructor(public nome:string, public cargaHoraria: number, public categoria: string, public thumb: string) {}
}

export default Curso;