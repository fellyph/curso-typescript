import CategoriaCursos from './utils/CategoriaCurso';
import ListaCursoComponente from './curso/ListaCursoComponente';
import TipoCurso from './utils/TipoCurso';
import FavoriteService from './service/FavoriteService';
import Curso from './curso/Curso';

class CursoApp {
    private favoriteData: FavoriteService;

    private data = [
        {tipo: TipoCurso.PRESENCIAL, nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20},
        {tipo: TipoCurso.PRESENCIAL, nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Sao Paulo', vagas: 10},
        {tipo: TipoCurso.ONLINE, nome: 'PhotoShop', cargaHoraria: 40, categoria: CategoriaCursos.DESIGN, link: 'http://www.imediabrasil.com.br' }
    ];
    private target:HTMLElement;
    private listaCursoComponente:ListaCursoComponente;

    constructor(element:HTMLElement) {
        this.target = element;
        this.favoriteData = new FavoriteService('favoritosDatabase');
        let test = new Curso('test', 40, CategoriaCursos.DESENVOLVIMENTO, 'test.jpg');
        this.favoriteData.save(test);
        this.favoriteData.getAll();
        this.init();
    }

    init() {
        this.listaCursoComponente = new ListaCursoComponente(this.data);
        this.target.innerHTML = this.listaCursoComponente.render();
    }
}

let target = document.getElementById('app');
let app = new CursoApp(target);