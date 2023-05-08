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
    //MÉTODOS
    public printMovie(){
        console.log(this.title, this.releaseYear, this.actors, this.nacionality, this.director, this.writer, this.language, this.platform, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre)
    }
}