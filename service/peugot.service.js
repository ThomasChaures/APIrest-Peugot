import { readFile, writeFile } from 'fs/promises';
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
        .then(autos => {
            return autos.find(auto => auto.id == id) ||[]
        }) 
        .catch(err => {
            console.log(err);
            throw err; 
        });
}
export const getAutoByType = async (type) => {
    return getAutos()
        .then(autos => {
            return autos.filter(autosType => autosType.type === type) || [];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

export const agregarAuto = async (auto) => {
     return getAutos(true)
        .then(async autos => {
            const nuevoAuto = {
                id: autos.length + 1,
                ...auto
            }
        autos.push(nuevoAuto)
        await writeFile("./data/catalogo.json", JSON.stringify(autos))
        return nuevoAuto
        })
        .catch((err) => console.log(err))
}


export const eliminadoLogico = async (id) => {
    return getAutos(true)
        .then( async autos => {
            const autosActualizados = autos.map( auto => {
                if( auto.id == id){
                    return {
                        ...auto,
                        eliminado: true
                    }
                }else{
                    return auto
                }
            })
            await writeFile("./data/catalogo.json", JSON.stringify(autosActualizados))
            return id
        })
        .catch((err) => console.log(err))
}


export const remplazarAuto = async (id, autoModificado) => {
    return getAutos(true)
        .then( async autos => {
            let autoRemplazo = null
            const autosActualizados = autos.map( auto => {
                if(auto.id == id){
                    autoRemplazo = { 
                        id: id,
                        ...autoModificado
                    }
                    return autoModificado
                } else {
                    return auto
                }
            })
            await writeFile("./data/catalogo.json", JSON.stringify(autosActualizados))
        })
        .catch((err) => console.log(err))
}

export const actualizarAuto = async (id, autoActualizado) => {
    return getAutos(true)
        .then( async autos => {
            let autoRemplazo = null
            const autosActualizados = autos.map( auto => {
                if(auto.id == id){
                    autoRemplazo = { 
                        id: id,
                        model: autoActualizado.model ? autoActualizado.model : auto.model,
                        year: autoActualizado.year ? autoActualizado.year : auto.year,
                        type: autoActualizado.type ? autoActualizado.type : auto.type,
                        engine: autoActualizado.engine ? autoActualizado.engine : auto.engine,
                        horsepower: autoActualizado.horsepower ? autoActualizado.horsepower : auto.horsepower,
                        description: autoActualizado.description ? autoActualizado.description : auto.description,
                        price_usd: autoActualizado.price_usd ? autoActualizado.price_usd : auto.price_usd,
                    }
                    return autoRemplazo
                } else {
                    return auto
                }
            })
            await writeFile("./data/catalogo.json", JSON.stringify(autosActualizados))
        })
        .catch((err) => console.log(err))
}