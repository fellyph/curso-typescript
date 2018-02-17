import ICurso from "./ICurso";
import TipoCurso from "../utils/TipoCurso";
import Curso from "./Curso";
import CursoOnline from "./CursoOnline";
import CursoPresencial from "./CursoPresencial";

class ListaCursoComponente {
    private cursos:Array<ICurso>;

    constructor(lista) {
        this.cursos = [];
        lista.forEach(element => {
            this.cursos.push(this.factory(element));
        });
    }

    factory(item):ICurso {
        switch(item.tipo){
            case TipoCurso.ONLINE:
                return new CursoOnline(item.nome, item.cargaHoraria, item.categoria, item.link);
            case TipoCurso.PRESENCIAL:
                return new CursoPresencial(item.nome, item.cargaHoraria, item.categoria, item.local, item.vagas);
            default:
                return new Curso(item.nome, item.cargaHoraria, item.categoria);
        }
    }

    render():string {
        let content = '<div class="row">';
        this.cursos.forEach( item => {
            content += item.render();
        })
        content += '</div>';
        return content;
    }

}

export default ListaCursoComponente;