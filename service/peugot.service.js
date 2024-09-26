import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import { MongoClient, ObjectId } from "mongodb"

const cliente = new MongoClient('mongodb://localhost:27017')
const db = cliente.db("Peugot")


export const getAutos = async (eliminados = false) => {

    await cliente.connect()
        return db.collection("Autos").find({"eliminado": {"$ne": !eliminados}}).toArray()
}

export const getAutoId = async (id) => {
    await cliente.connect()
        const datos = await db.collection("Autos").findOne({_id: ObjectId.createFromHexString(id)})
        return datos
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
    await cliente.connect()
    await db.collection("Autos").insertOne(auto)    
    return auto
//      return getAutos(true)
//         .then(async autos => {
//             const nuevoAuto = {
//                 id: autos.length + 1,
//                 ...auto
//             }
//         autos.push(nuevoAuto)
//         await writeFile("./data/catalogo.json", JSON.stringify(autos))
//         return nuevoAuto
//         })
//         .catch((err) => console.log(err))
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

    await cliente.connect()
    await db.collection('Autos').replaceOne({_id: ObjectId.createFromHexString(id)}, peliculaRemplazada)
    return peliculaRemplazada
    // return getAutos(true)
    //     .then( async autos => {
    //         let autoRemplazo = null
    //         const autosActualizados = autos.map( auto => {
    //             if(auto.id == id){
    //                 autoRemplazo = { 
    //                     id: id,
    //                     ...autoModificado
    //                 }
    //                 return autoModificado
    //             } else {
    //                 return auto
    //             }
    //         })
    //         await writeFile("./data/catalogo.json", JSON.stringify(autosActualizados))
    //     })
    //     .catch((err) => console.log(err))
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