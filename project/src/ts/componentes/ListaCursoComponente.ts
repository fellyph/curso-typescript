import ICurso from "curso/ICurso";
import TipoCurso from "utils/TipoCurso";
import Curso from "curso/Curso";
import CursoOnline from "curso/CursoOnline";
import CursoPresencial from "curso/CursoPresencial";
import Componente from "./Componente";
import IComponente from "./IComponente";

class ListaCursoComponente extends Componente {
    private cursos:Array<IComponente>;

    constructor(lista) {
        super()
        this.template = document.createElement('div');
        this.template.classList.add('row cursos');
        this.cursos = lista;
    }

    render():HTMLElement {
        this.cursos.forEach( item => {
            this.template.appendChild(item.render());
        })
        return this.template;
    }

}

export default ListaCursoComponente;