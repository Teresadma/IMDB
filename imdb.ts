import {Movie} from "./movie";

export class Imdb {
    //ATRIBUTOS
    public peliculas: Movie[];
    //CONSTRUCTOR
    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }
}



