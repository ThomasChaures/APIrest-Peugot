import * as service from '../../service/peugot.service.js'


export const getAutos = (req, res) => {
    service.getAutos()
        .then(autos => {
            res.status(200).json(autos)
        })
        .catch((err) => console.log(err))
}

export const getAutoId = (req, res) =>{
    service.getAutoId(req.params.id)
        .then(auto => {
            res.status(200).json(auto)
        })
        .catch((err) => console.log(err))
}

export const getAutoByType = (req, res) => {
    service.getAutoByType(req.params.type)
    .then(autos => {
        res.status(200).json(autos)
    })
    .catch((err) => console.log(err))
}

export const agregarAuto = (req, res) => {
    service.agregarAuto(req.body)
        .then((auto) => res.status(201).json(auto))
        .catch((err) => console.log(err))
}

export const remplazarAuto = (req, res) => {
    service.remplazarAuto(req.params.id, req.body)
         .then((auto) => res.status(201).json(auto))
         .catch((err) => console.log(err))
}

export const actualizarAuto = (req, res) => {
    service.actualizarAuto(req.params.id, req.body)
    .then((auto) => res.status(201).json(auto))
    .catch((err) => console.log(err))
}

export const eliminadoLogico = (req, res) => {
    service.eliminadoLogico(req.params.id)
           .then((id) => res.status(202).json({id: id}))
           .catch((err) => console.log(err))
}