import { readFile } from 'fs/promises';
import { resolve } from 'path';

export const getAutos = (eliminados = false) => {
    return readFile(resolve("data/catalogo.json"), { encoding: 'utf8' })
        .then((autos) =>{
            
          return  eliminados ? JSON.parse(autos) : JSON.parse(autos).filter(auto => !auto.eliminado) 
           
        })
        .catch((err) => console.log(err));
}

export const getAutoId = (id) => {
    return getAutos()
        .then(autos => autos.find(auto => auto.id == id) ||[]) // Retorna null si no se encuentra
        .catch(err => {
            console.log(err);
            throw err; // Lanza el error para que el controlador pueda manejarlo
        });
}