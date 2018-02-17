interface ICurso {
    id?: number;
    nome: string;
    cargaHoraria: number;
    categoria: string;
    render();
}

export default ICurso;