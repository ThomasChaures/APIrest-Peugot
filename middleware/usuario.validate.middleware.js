import { usuarioSchema } from "../schemas/usuarios.validate.js"

export function validateUser(req, res, next) {
    usuarioSchema.validate(req.body, {abortEarly: false, stripUnknown: true}) // devuelve una promesa
    .then(() => { 
        next(); 
    })
    .catch((err) => {
        res.status(400).json({ message: err.errors }); // 400 is more appropriate for validation errors
    });
}
