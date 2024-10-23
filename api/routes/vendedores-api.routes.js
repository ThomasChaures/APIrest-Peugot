import { Router } from "express";
import * as controllerVendedores from "../controller/vendedores-api.controller.js";
import * as controllersPeugot from "../controller/autos-api.controller.js";

const route = Router();
route.get("/vendedores", controllerVendedores.getVendedores); // recurso

route.get("/autos/vendedores/:vendedor", controllersPeugot.getAutosByVendedor); // recurso

route.post("/vendedores", controllerVendedores.postVendedores); // crear


export default route;