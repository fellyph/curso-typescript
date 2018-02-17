import ICurso from '../curso/ICurso';
import Curso from '../curso/Curso';
import IDataService from './IDataService';

class FavoriteService implements IDataService { 
    private favorites: ICurso[];
    private db;
    private dbName;

    constructor(dataBaseName:string){
        this.dbName = dataBaseName;
        this.db = window.localStorage;
        this.favorites = this.init();
    }

    init() {
        if(!this.db.getItem(this.dbName)) {
            this.db.setItem(this.dbName, '[]');
        }
        return JSON.parse(this.db.getItem(this.dbName));
    }

    getAll():ICurso[] {
        return this.favorites;
    }

    save(curso:ICurso) {
        this.favorites.push(curso);
        this.db.setItem(this.dbName, JSON.stringify(this.favorites));
    }

    delete(curso:ICurso) {
        this.favorites = this.favorites.filter(item => item !== curso);
        console.log(this.favorites, curso);
    }
}

export default FavoriteService;
