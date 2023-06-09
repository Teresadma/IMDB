import {Professional} from "./professional";

export class Movie {
    //ATRIBUTOS
    public title: string;
    public releaseYear: number;
    public actors: Professional [];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    //CONSTRUCTOR
    constructor (title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.platform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }
    public printMovie(){
        console.log("El título de la película es: ", this.title ,"\n","El año de lanzamiento es: ",this.releaseYear,"\n","Los actores son: ", this.actors,"\n","La película ha sido firlmada en: ", this.nacionality,"\n","El director es: ",
        this.director,"\n","El guionista es: " ,this.writer,"\n","El idioma original es: ", this.language,"\n","Está en la plataforma de: " ,this.platform,"\n","forma parte de Marvel: ", this.isMCU,"\n","El protagonista es: ",
        this.mainCharacterName,"\n","El productor es: ", this.producer,"\n","La distribuidora es: ", this.distributor,"\n","El género es: ", this.genre)
    }
}