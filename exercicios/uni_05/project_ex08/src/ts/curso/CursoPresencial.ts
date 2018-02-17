import Curso from './Curso';

class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome:string, cargaHoraria: number, categoria: string, local:string = 'em breve', vagas:number = 99) {
        super(nome, cargaHoraria, categoria);
        this.local = local;
        this.vagas = vagas;
    }

    render():string {
        return `<article class="col-sm-6 col-md-4 curso presencial ${this.categoria}">
        <div class="card">
            <img class="responsive-img" src="assets/img/javascript.jpg">
            <div class="card-block">
                <h4 class="card-title">${this.nome}</h4>
                <p class="card-text">${this.cargaHoraria}h de curso  - ${this.vagas} vagas</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
            </div>
        </div>
    </article>`;
    }
}

export default CursoPresencial;