import { Router } from "express"
import * as controllersPeugot from '../controller/peugot-api.controller.js'

const route = Router()


route.get('/autos', controllersPeugot.getAutos) // recurso
route.get('/autos/tipos/:type', controllersPeugot.getAutoByType) // recurso
route.get('/autos/:id', controllersPeugot.getAutoId) // recurso
route.get('/autos/vendedores/:vendedor', controllersPeugot.getAutosByVendedor) // recurso

route.post('/autos', controllersPeugot.agregarAuto) // crear
route.put('/autos/:id', controllersPeugot.remplazarAuto) // remplazar
route.patch('/autos/:id', controllersPeugot.actualizarAuto) // actualizar
route.delete('/autos/:id', controllersPeugot.eliminadoLogico) // eliminar


export default route