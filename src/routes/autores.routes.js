import { Router } from "express";
import { getAutores } from "../controller/autores.controller.js";

const router = Router();

router.get("/", getAutores);

export { router };
