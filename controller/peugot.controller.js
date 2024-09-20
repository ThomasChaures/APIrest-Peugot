import * as views from '../views/peugot.views.js'
import * as service from '../service/peugot.service.js'

export const getAutos = (req, res) => {
    service.getAutos(true)
        .then( autos => {
            res.send( views.crearPagina('Vehiculos', views.todosLosAutos(autos)))
        })
        .catch((err) => console.log(err))
}

export const getAutoId = (req, res) => {
    service.getAutoId(req.params.id)
        .then(auto => {
            res.send(views.crearPagina(`${auto.model}`, views.autoId(auto)))
        })
        .catch((err) => console.log(err))
}