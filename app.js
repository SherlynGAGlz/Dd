//actividades de testeo
//falte a clase, actividad hecha en clase
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumna.controller.js";

dotenv.config()
mongoose.connect(process.env.urlbase)
.then(()=>{ //promesa
    console.log("Funciona la base de tados")
})
.catch((error)=>{
    console.log("No funciono la base de datos", error)
})
const app=express(); //crea
app.use(cors()) //seguridad
app.listen(4001, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})
test() 