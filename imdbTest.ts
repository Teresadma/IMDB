import {Movie} from "./movie";
import {Imdb} from "./imdb";
import {Professional} from "./professional";

let professional1: Professional = new Professional ("Pepito",45,70,185,true,"Española",4,"cantante");
let professional2: Professional = new Professional ("Nanito",26,85,192,false,"Española",4,"peluquero");
let professional3: Professional = new Professional ("Mayte",32,60,1170,true,"Española",4,"bailarina");

let actores: Professional[] = [professional1,professional2,professional3]

let guionista: Professional = new Professional ("Sofía",23,56,1170,true,"Española",4,"bailarina");
let director: Professional = new Professional ("Aitor",23,75,1170,false,"Española",4,"director");

let pelicula2: Movie = new Movie ("La llorería", 2022, "Argentina", "Ciencia ficción")
let pelicula: Movie = new Movie ("Voy a llorar", 2023, "España", "Acción");
let peliculas: Movie[] = [pelicula,pelicula2]
pelicula.actors = actores;
pelicula.director = director;
pelicula.writer = guionista;
pelicula.language = "Español";
pelicula.platform = "Netflix";
pelicula.isMCU = false;
pelicula.mainCharacterName = "Paco";
pelicula.producer = "Pablo";
pelicula.distributor = "Walt Disney";

let imdb1: Imdb = new Imdb (peliculas)
// console.log(imdb1)

let JSONimdb = JSON.stringify(imdb1)
console.log(JSONimdb)

// const fs = require('fs')
// fs.writeFileSync(file, data[, options])



