//Como y donde se gurdan datos
import{Schema, model} from "mongoose";

const Esquema = new Schema({
     name: String,
     edad: Number
});

export const modelo = model("Tabla de alumnos", Esquema)