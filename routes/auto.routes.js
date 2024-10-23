import { Router } from "express"
import * as controllersAutos from '../controller/autos.controller.js'

const route = Router()


route.get('/', controllersAutos.getAutos)
route.get('/types/:type', controllersAutos.getAutoByType)
route.get('/:id', controllersAutos.getAutoId)


export default route