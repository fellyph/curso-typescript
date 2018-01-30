interface ICurso {
  nome: string;
  cargaHoraria: number;
  categoria: string;
}
  
enum CategoriaCursos {
  DESENVOLVIMENTO = 'desenvolvimento',
  DESENVOLVIMENTO_WEB = 'desenvolvimento_web',
  DESIGN = 'design',
  MARKETING = 'marketing'
}

class Curso implements ICurso {
  constructor(public nome:string, public cargaHoraria: number, public categoria: string) {}
}

  // online - link
class CursoOnline extends Curso {
    link: string;
    constructor( nome:string, cargaHoraria: number, categoria: string, link:string = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria);
        this.link = link;
    }
}

  // presencial - local
class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome:string, cargaHoraria: number, categoria: string, local:string = 'em breve', vagas:number = 99) {
        super(nome, cargaHoraria, categoria);
        this.local = local;
        this.vagas = vagas;
    }
}

let cursoPresencialTS = new CursoPresencial('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB, 'Recife', 20);
let cursoPresencialJS = new CursoPresencial('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
let cursoOnlinePS = new CursoOnline('PhotoShop', 40, CategoriaCursos.DESIGN, 'http://www.imediabrasil.com.br');