import Componente from "./Componente";
import CursoPresencial from "../curso/CursoPresencial";

class CursoPresencialComponente extends Componente {
    curso: CursoPresencial;

    constructor(curso:CursoPresencial) {
        super();
        this.curso = curso;
        this.template = document.createElement('article');
        this.template.className = 'col-sm-6 col-md-4 curso presencial';
    }

    render():HTMLElement {
        this.template.innerHTML = `
        <div class="card">
            <img class="responsive-img" src="${this.curso.thumb}">
            <div class="card-block">
                <h4 class="card-title">${this.curso.nome}</h4>
                <p class="card-text">${this.curso.cargaHoraria}h de curso - ${this.curso.vagas} Vagas - Local: ${this.curso.local}</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
            </div>
        </div>`;
        return this.template;
    }
}