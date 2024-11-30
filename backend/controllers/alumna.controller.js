import { modelo } from "../models/alumna.model.js";

modelo.create({
    Name:"Sher",
    edad:18
});

export const test = ()=>{
    console.log("Funciona el controlador")
};