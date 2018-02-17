import ICurso from './ICurso';

class Curso implements ICurso {
    constructor(public nome:string, public cargaHoraria: number, public categoria: string) {}
    render() {
        
    }
}

export default Curso;