import { readFile } from 'fs/promises';
import { resolve } from 'path';

export const getAutos = async (eliminados = false) => {
    return await readFile(resolve("data/catalogo.json"), { encoding: 'utf8' })
        .then((autos) =>{
            
          return  eliminados ? JSON.parse(autos) : JSON.parse(autos).filter(auto => !auto.eliminado) 
           
        })
        .catch((err) => console.log(err));
}

export const getAutoId = async (id) => {
    return getAutos()
        .then(autos => autos.find(auto => auto.id == id) ||[]) 
        .catch(err => {
            console.log(err);
            throw err; 
        });
}

export const getAutoByType = async (type) =>{
    return getAutos()
        .then(autos => autos.find(autosType => autosType.type == type) || [])
        .catch(err => {
            console.log(err)
            throw err;
        })
}