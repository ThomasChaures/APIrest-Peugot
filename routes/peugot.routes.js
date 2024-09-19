import { Router } from "express"

const route = Router()


route.get('/peugot')


route.get('/peugot/types')
route.get('/peugot/:type')

route.get('/peugot/:id')


export default route