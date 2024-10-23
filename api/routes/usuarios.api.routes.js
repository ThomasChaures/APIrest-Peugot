import { Router } from "express";
import * as controller from "../controller/usuarios-api.controller.js";
import { validateUser } from "../../middleware/usuario.validate.middleware.js";
const route = Router();

route.post("/usuarios", [validateUser], controller.createUser);
route.post("/usuarios/login", controller.login);

export default route;
