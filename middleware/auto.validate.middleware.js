import { autoSchema } from "../schemas/autos.validate.js";

export async function validateAuto(req, res, next) {
  try {
    const datosValidados = await autoSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    req.body = datosValidados;
    next();
  } catch (error) {
    res.status(400).json({ message: error.errors });
  }
}
