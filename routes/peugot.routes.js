import { Router } from "express"
import * as controllersPeugot from '../controller/peugot.controller.js'

const route = Router()


route.get('/', controllersPeugot.getAutos)
route.get('/types/:type')
route.get('/:id', controllersPeugot.getAutoId)


export default route