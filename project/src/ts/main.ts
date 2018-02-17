import CategoriaCursos from './utils/CategoriaCurso';
import ListaCursoComponente from './componentes/ListaCursoComponente';
import TipoCurso from './utils/TipoCurso';
import FavoriteService from './service/FavoriteService';
import Curso from './curso/Curso';
import IDataService from './service/IDataService';
import ICurso from './curso/ICurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';

class CursoApp {
    private data = [
        {tipo: TipoCurso.PRESENCIAL, nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20},
        {tipo: TipoCurso.PRESENCIAL, nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Sao Paulo', vagas: 10},
        {tipo: TipoCurso.ONLINE, nome: 'PhotoShop', cargaHoraria: 40, categoria: CategoriaCursos.DESIGN, link: 'http://www.imediabrasil.com.br' }
    ];
    private target:HTMLElement;
    private listaCursoComponente:ListaCursoComponente;
    private listaCursos:Array<ICurso>;
    
    constructor(element:HTMLElement) {
        this.target = element;
        this.listaCursos = [];
        this.data.forEach(item => this.listaCursos.push(this.factoryCurso(item)));
        this.init();
    }

    init() {
        this.listaCursoComponente = new ListaCursoComponente(this.listaCursos);
        this.target.innerHTML = this.listaCursoComponente.render();
    }

    factoryCurso(item):ICurso {
        switch(item.tipo){
            case TipoCurso.ONLINE:
                return new CursoOnline(item.nome, item.cargaHoraria, item.categoria, item.link);
            case TipoCurso.PRESENCIAL:
                return new CursoPresencial(item.nome, item.cargaHoraria, item.categoria, item.local, item.vagas);
            default:
                return new Curso(item.nome, item.cargaHoraria, item.categoria, item.thumb);
        }
    }
}

let target = document.getElementById('app');
let app = new CursoApp(target);