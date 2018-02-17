import ICurso from './ICurso';

class Curso implements ICurso {
    public id?:number;
    constructor(public nome:string, public cargaHoraria: number, public categoria: string, thumb: string) {}
    render() {

    }
}

export default Curso;