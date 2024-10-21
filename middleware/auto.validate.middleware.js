import { autoSchema } from "../schemas/autos.validate.js"

export function validateAuto(req, res, next){
    movieSchema.validate(req.body) // devuelve una promesa
    .then(() => { next() })
    .cath((err) => {
        res.status(404).json({message: err.message})
    })
}