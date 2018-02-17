import ICurso from "../curso/ICurso";

interface IDataService {
    getAll();
    save(item:ICurso);
    delete(item:ICurso);
}

export default IDataService;