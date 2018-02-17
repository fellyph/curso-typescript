System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FavoriteService;
    return {
        setters: [],
        execute: function () {
            FavoriteService = class FavoriteService {
                constructor(dataBaseName) {
                    this.dbName = dataBaseName;
                    this.db = window.localStorage;
                    this.favorites = this.init();
                }
                init() {
                    if (!this.db.getItem(this.dbName)) {
                        this.db.setItem(this.dbName, '[]');
                    }
                    return JSON.parse(this.db.getItem(this.dbName));
                }
                getAll() {
                    return this.favorites;
                }
                save(curso) {
                    this.favorites.push(curso);
                    this.db.setItem(this.dbName, JSON.stringify(this.favorites));
                }
                delete(curso) {
                    this.favorites = this.favorites.filter(item => item !== curso);
                    console.log(this.favorites, curso);
                }
            };
            exports_1("default", FavoriteService);
        }
    };
});
//# sourceMappingURL=FavoriteService.js.map