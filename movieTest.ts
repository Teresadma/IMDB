import {Professional} from "./professional";
import {Movie} from "./movie";

let actor1: Professional = new Professional ("Pepito",45,70,185,true,"Española",4,"cantante");

let actor2: Professional = new Professional ("Nanito",26,85,192,false,"Española",4,"peluquero");

let actor3: Professional = new Professional ("Mayte",32,60,1170,true,"Española",4,"bailarina");
let actores: Professional[] = [actor1,actor2,actor3]
// let actores: Professional[] = [actor1]
// let actor1: Professional = new Professional ("Teresa",26,55,1170,true,"Española",4,"bailarina");
// let actor2: Professional = new Professional ("Elena",24,57,1170,false,"Española",4,"bailarina");
let guionista: Professional = new Professional ("Sofía",23,56,1170,true,"Española",4,"bailarina");

let director: Professional = new Professional ("Aitor",23,75,1170,false,"Española",4,"director");

let pelicula: Movie = new Movie ("Voy a llorar", 2023, "España", "Acción");
pelicula.actors = actores;
pelicula.director = director;
pelicula.writer = guionista;
pelicula.language = "Español";
pelicula.platform = "Netflix";
pelicula.isMCU = false;
pelicula.mainCharacterName = "Paco";
pelicula.producer = "Pablo";
pelicula.distributor = "Walt Disney";
// console.log(pelicula.actors)

pelicula.printMovie()



