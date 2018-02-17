import Curso from './Curso';

class CursoOnline extends Curso {
    link: string;
    constructor( nome:string, cargaHoraria: number, categoria: string, thumb:string, link:string = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria, thumb);
        this.link = link;
    }

    render():string {
        return `<article class="col-sm-6 col-md-4 curso online ${this.categoria}">
        <div class="card">
            <img class="responsive-img" src="assets/img/javascript.jpg">
            <div class="card-block">
                <h4 class="card-title">${this.nome}</h4>
                <p class="card-text">${this.cargaHoraria}h de curso</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
                <a href="${this.link}" class="btn btn-primary">Acessar</a>
            </div>
        </div>
    </article>`;
    }
}

export default CursoOnline;