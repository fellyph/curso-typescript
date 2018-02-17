import Curso from './Curso';

class CursosListComponent {
    private cursos:Array<Curso>;
    constructor(cursos) {
        this.cursos = cursos;
    }
    
    render():String {
        let listaContent = '<div class="row">';
        this.cursos.forEach(item => {
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
        return listaContent;
    }
}

export default CursosListComponent;