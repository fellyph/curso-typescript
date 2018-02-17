import Componente from "./Componente";
import CursoOnline from "../curso/CursoOnline";

class CursoOnlineComponent extends Componente{
    curso:CursoOnline;
    constructor(curso:CursoOnline) {
        super();
        this.curso = curso;
        this.template = document.createElement('article');
        this.template.className = 'col-sm-6 col-md-4 curso online';
    }

    render():HTMLElement {
        this.template.innerHTML = `
        <div class="card">
            <img class="responsive-img" src="${this.curso.thumb}">
            <div class="card-block">
                <h4 class="card-title">${this.curso.nome}</h4>
                <p class="card-text">${this.curso.cargaHoraria}h de curso</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
                <a href="${this.curso.link}" class="btn btn-primary">Acessar</a>
            </div>
        </div>`;
        return this.template;
    }
}

export default CursoOnlineComponent;