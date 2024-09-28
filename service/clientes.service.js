import { MongoClient, ObjectId } from "mongodb";

const cliente = new MongoClient("mongodb://localhost:27017");
const db = cliente.db("AH20232CP1");

export const getClienteApi = async () => {
    await cliente.connect()
   const vendedores = await db.collection('Vendedores').find().toArray()
    return vendedores
}

export const agregarClienteApi = async (vendedor) => {
  await cliente.connect()
  await db.collection("Vendedores").insertOne(vendedor);
  return vendedor;
};

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
  return vendedor;
};

export const getAutosDelVendedor = async (name) => {
  const vendedor = await db.collection("Vendedores").findOne({ nombre: name });
  const autos = vendedor.autos_vendiendo || [];
  console.log("Vendedor", vendedor);
  console.log(autos);
  return autos;
};

export const agregarAutosAlVendedor = async (auto, vendedorNombre) => {
  const vendedor = await db
    .collection("Vendedores")
    .findOne({ nombre: vendedorNombre });

  const autos = vendedor.autos_vendiendo || [];
  autos.push(auto);

  const vendedorActualizado = await db
    .collection("Vendedores")
    .updateOne(
      { nombre: vendedor.nombre },
      { $set: { autos_vendiendo: autos } }
    );

  return vendedorActualizado;
};
