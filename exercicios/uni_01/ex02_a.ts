class Aluno {
    nome: string;
    sobrenome: string;
    idade: number;
    curso: string;

    iniciaCurso(novoCurso: string) {
        this.curso = novoCurso;
    }
}