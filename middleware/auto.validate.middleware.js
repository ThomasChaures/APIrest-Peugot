import { autoSchema } from "../schemas/autos.validate.js"

export function validateAuto(req, res, next) {
    autoSchema.validate(req.body, {abortEarly: false, stripUnknown: true}) // devuelve una promesa
    .then(() => { 
        next(); 
    })
    .catch((err) => {
        res.status(400).json({ message: err.errors }); // 400 is more appropriate for validation errors
    });
}
