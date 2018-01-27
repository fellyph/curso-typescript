interface Curso {
  nome: string;
  cargaHoraria: number;
  categoria: string;
}

enum Categoria {
  Design = 'DESIGN',
  Desenvolvimento = 'DESENVOLVIMENTO',
  Marketing = 'MARKETING'
}

let online: Curso = {
  nome: 'Photoshop',
  cargaHoraria: 30,
  categoria: Categoria.Design
};

let presencial: Curso = {
  nome: 'TypeScript',
  cargaHoraria: 40,
  categoria: Categoria.Desenvolvimento
};