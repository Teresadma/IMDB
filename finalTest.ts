import {Movie} from "./movie";
import {Imdb} from "./imdb";
import {Professional} from "./professional";
var readlineSync = require('readline-sync');


let personita = {
    name: "",
    age: 0,
    weight: 0,
    height:0,
    isRetired:false,
    nationality:"",
    oscarsNumber:0,
    profession:"",
}
personita.name = readlineSync.question("Cual es el nombre del actor?: ");
personita.age = readlineSync.question("Cual es su edad?: ");
personita.weight = readlineSync.question("Cuanto pesa?: ");
personita.height = readlineSync.question("Cuanto mide?: ");
personita.isRetired = readlineSync.question("Esta retirado?: ");
personita.nationality = readlineSync.question("Cual es su nacionalidad?: ");
personita.oscarsNumber = readlineSync.question("Cuantos Oscar tiene?: ");
personita.profession = readlineSync.question("Cual es su profesion?: ")

console.log(personita)

let professional1: Professional = new Professional ("Pepito",45,70,185,true,"Española",4,"cantante");
let professional2: Professional = new Professional ("Nanito",26,85,192,false,"Española",4,"peluquero");
let professional3: Professional = new Professional ("Mayte",32,60,1170,true,"Española",4,"bailarina");

let actores: Professional[] = [professional1,professional2,professional3]
let personitaJSON = JSON.stringify(personita)
console.log(personitaJSON)
let personitaProf: Professional = JSON.parse(personitaJSON)

actores.push(personitaProf)
console.log(actores)

let guionista: Professional = new Professional ("Sofía",23,56,1170,true,"Española",4,"bailarina");
let director: Professional = new Professional ("Aitor",23,75,1170,false,"Española",4,"director");

let pelicula2: Movie = new Movie ("La llorería", 2022, "Argentina", "Ciencia ficción")
let pelicula: Movie = new Movie ("Voy a llorar muchísimo", 2023, "España", "Acción");
let peliculas: Movie[] = [pelicula,pelicula2]
pelicula.actors = actores;
pelicula.director = director;
pelicula.writer = guionista;
pelicula.language = "Español";
pelicula.platform = "Netflix";
pelicula.isMCU = false;
pelicula.mainCharacterName = "Paco";
pelicula.producer = "Jesus";
pelicula.distributor = "Walt Disney";

let imdb1: Imdb = new Imdb (peliculas)

imdb1.escribirEnFicheroJSON("finalTest.json")




