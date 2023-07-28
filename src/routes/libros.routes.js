import { Router } from "express";
import { getLibrosCategoryAutor } from "../controller/libros.controller.js";

const router = Router();

router.get("/", getLibrosCategoryAutor);

export { router };
