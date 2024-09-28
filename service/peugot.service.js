import { MongoClient, ObjectId } from "mongodb";
import * as serviceVendedores from "./clientes.service.js";

const cliente = new MongoClient("mongodb://localhost:27017");
const db = cliente.db("AH20232CP1");

export const getAutos = async (filtros = {}) => {
  const filterMongo = {eliminado: {$ne: true}}
  if (filtros.year !== undefined) {
    filterMongo.year = { $eq: parseInt(filtros.year)};
  }

  if(filtros.horsepower !== undefined){
    filterMongo.horsepower = {$eq: parseInt(filtros.horsepower)}
  }
  

 if (filtros.precioMinimo !== undefined || filtros.preciMaximo !== undefined) {
  filterMongo.$and = [];

  if (filtros.precioMinimo !== undefined) {
    filterMongo.$and.push({ price_usd: { $gt: parseInt(filtros.precioMinimo) } });
  }

  if (filtros.precioMaximo !== undefined) {
    filterMongo.$and.push({ price_usd: { $lt: parseInt(filtros.precioMaximo) } });
  }
}


  if(filtros.description !== undefined){
      filterMongo.$text = {$search: filtros.description}
  }


  await cliente.connect();
  return db
    .collection("Autos")
    .find(filterMongo)
    .toArray();
};

export const getAutoId = async (id) => {
  await cliente.connect();
  const datos = await db
    .collection("Autos")
    .findOne({ _id: ObjectId.createFromHexString(id) });
  return datos;
};

export const getAutosByVendedor = async (vendedor) => {
  await cliente.connect();

  const carros = await serviceVendedores.getAutosDelVendedor(vendedor);

  console.log(carros)

  const autos = await db
    .collection("Autos")
    .find({
      _id: { $in: carros.map((id) => ObjectId.createFromHexString(id)) },
    })
    .toArray();

  return autos;
};

export const getAutoByType = async (type) => {
  await cliente.connect();
  const datos = await db.collection("Autos").find({ type }).toArray();
  return datos;
};

export const agregarAuto = async (auto) => {
  await cliente.connect();
  console.log(auto);
  console.log(auto.vendedor);
  auto._id = new ObjectId();
  if (auto.vendedor !== "") {
    let vendedor = await serviceVendedores.getClienteNombre(auto.vendedor);

    if (!vendedor) {
      const vendCliente = {
        img: "example.jpg",
        nombre: auto.vendedor,
        description: "Usuario vendedor de autos usados de Peugot",
        autos_vendiendo: [],
      };
      await serviceVendedores.agregarCliente(vendCliente);
    }
  }
  const res = await db.collection("Autos").insertOne(auto);
  console.log(res.insertedId.toString());
  const autoId = res.insertedId.toString();

  if (auto.vendedor) {
    serviceVendedores.agregarAutosAlVendedor(autoId, auto.vendedor);
    serviceVendedores.getAutosDelVendedor(auto.vendedor);
  }

  return auto;
};

export const eliminadoLogico = async (id) => {
  await cliente.connect();
  await db
    .collection("Autos")
    .updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: { eliminado: true } }
    );
  return id;
};

export const remplazarAuto = async (id, autoRemplazado) => {
  await cliente.connect();
  await db
    .collection("Autos")
    .replaceOne({ _id: ObjectId.createFromHexString(id) }, autoRemplazado);
  return autoRemplazado;
};

export const actualizarAuto = async (id, autoActualizado) => {
  await cliente.connect();
  const autoUpdate = await db
    .collection("Autos")
    .updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: autoActualizado }
    );
  return autoUpdate;
};
