import { Router } from "express";
import { getAutores } from "../controller/autores.controller.js";
import { getCategorias } from "../controller/categorias.controller.js";

const router = Router();

router.get("/", getCategorias);

export { router };
