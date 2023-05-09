
import {Movie} from "./movie";
import * as fs from 'fs';

export class Imdb {
    //ATRIBUTOS
    public peliculas: Movie[];
    //CONSTRUCTOR
    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }
    //METODOS
    public escribirEnFicheroJSON(nombreFichero:string){
        let escribirJSON = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, escribirJSON)
    }
    public obtenerInstanciaIMDB(nombreFichero:string){
        let JSONlectura = fs.readFileSync(nombreFichero, "utf-8");
        let objetoJSON = JSON.parse(JSONlectura);
        return objetoJSON
    }
}