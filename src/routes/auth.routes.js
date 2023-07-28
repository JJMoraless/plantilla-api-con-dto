import { Router } from "express";
import { logOut, login, register } from "../controller/auth.controller.js";
import validateDto from "../middlewares/validation.middleware.js";

const router = Router();

// router.post("/register", register);
router.post("/login", login);
router.get("/logOut", logOut);

export { router };
