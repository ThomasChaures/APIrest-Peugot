import { MongoClient, ObjectId } from "mongodb";

const cliente = new MongoClient("mongodb://localhost:27017");
const db = cliente.db("Peugot");

export const agregarCliente = async (vendedor) => {
  await db.collection("Vendedores").insertOne(vendedor);
  return vendedor;
};

export const getClienteNombre = async (nombre) => {
  const vendedor = await db
    .collection("Vendedores")
    .findOne({ nombre: nombre });
  return vendedor;
};

export const getVendedorByNombre = async (name) => {
  const vendedor = await db
    .collection("Vendedores")
    .findOne({ nombre: name })
    .toArray();
  return vendedor;
};

export const getAutosDelVendedor = async (name) => {
    const vendedor = await db.collection('Vendedores').findOne({nombre: name});
    const autos = vendedor.autos_vendiendo;
    console.log(autos)
    return autos
}

export const agregarAutosAlVendedor = async (auto, vendedorNombre) => {
  const vendedor = await db
    .collection("Vendedores")
    .findOne({ nombre: vendedorNombre });

  const autos = vendedor.autos_vendiendo || []; 
  autos.push(auto);

  const vendedorActualizado = await db.collection("Vendedores").updateOne(
    { nombre: vendedor.nombre },
    { $set: { autos_vendiendo: autos } }
  );

  return vendedorActualizado;
};
