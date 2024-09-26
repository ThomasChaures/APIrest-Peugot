import { MongoClient } from "mongodb"

const cliente = new MongoClient('mongodb://localhost:27017')

cliente.connect()
    .then( async () =>{
        const db = cliente.db("Peugot")
        const autos = await db.collection('Autos').find().toArray()
        const usuarios = await db.collection('Autos').find().toArray()
        console.log(autos)
    })
    .catch(() => console.log('errror'))