import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';
import CategoriaCurso from './utils/CategoriaCurso';
import Curso from './curso/Curso';

class CursoApp {
    private listaCursos = [
        {nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, thumb: 'assets/img/typescript.jpg', local: 'Recife', vagas: 20},
        {nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, thumb: 'assets/img/javascript.jpg', link: 'http://imediabrasil.com.br'}
    ];
    private element;

    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        let listaContent;
        listaContent = '<div class="row">';
        this.listaCursos.forEach(item => {
           listaContent += `<article class="col-sm-6 col-md-4 curso presencial">
           <div class="card">
               <img class="responsive-img" src="${item.thumb}">
               <div class="card-block">
                   <h4 class="card-title">${item.nome}</h4>
                   <p class="card-text">${item.cargaHoraria}h de curso - ${item.categoria}</p>
                   <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
               </div>
           </div>
       </article>`;
        });
        listaContent += '</div>';
        this.element.innerHTML = listaContent;
    }
}

let target = document.getElementById('app');
let app = new CursoApp(target);
