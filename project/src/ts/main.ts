import CategoriaCursos from './utils/CategoriaCurso';
import CursoOnline from './curso/CursoOnline';
import CursoPresencial from './curso/CursoPresencial';
import CategoriaCurso from './utils/CategoriaCurso';
import Curso from './curso/Curso';

let cursoPresencialTS = new CursoPresencial('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB, 'Recife', 20);
let cursoPresencialJS = new CursoPresencial('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
let cursoOnlinePS = new CursoOnline('PhotoShop', 40, CategoriaCursos.DESIGN, 'http://www.imediabrasil.com.br');


class CursosApp {
  private cursosList;

  constructor () {
    this.cursosList = [
      {nome:"Typescript", carga:40, categoria:CategoriaCursos.DESENVOLVIMENTO_WEB, local:'Recife', vagas:20, tipo:'Presencial'},
      {nome:"JavaScript", carga:40, categoria:CategoriaCursos.DESENVOLVIMENTO_WEB, local:'Recife', vagas:20, tipo:'Presencial'},
      {nome:"Typescript", carga:40, categoria:CategoriaCursos.DESENVOLVIMENTO_WEB, local:'Recife', vagas:20, tipo:'Presencial'},
    ]
  }

  render() {

  }
}