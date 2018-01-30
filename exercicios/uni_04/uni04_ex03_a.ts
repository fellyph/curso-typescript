/*interface ICurso {
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
    constructor(link:string, nome:string, cargaHoraria: number, categoria: string) {
        super(nome, cargaHoraria, categoria);
        this.link = link;
    }
}

  // presencial - local
class CursoPresencial extends Curso {
    local: string;
    vagas: number;
    constructor(nome:string, cargaHoraria: number, categoria: string, local:string, vagas:number) {
        super(nome, cargaHoraria, categoria);
        this.local = local;
        this.vagas = vagas;
    }
}

  let cursoPresencialTS = new Curso('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
  let cursoPresencialJS = new Curso('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
  let cursoOnlinePS = new CursoOnline('http://www.imediabrasil.com.br','PhotoShop', 40, CategoriaCursos.DESIGN); */