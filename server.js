import express from "express";
import autosRutas from "./routes/peugot.routes.js";
import apiAutosRutas from "./api/routes/peugot-api.routes.js";
import apiVendedoresRutas from "./api/routes/peugot-api-vendedores.routes.js";
import cors from "cors";

const app = express();
app.use(express.static("img"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE"
}
app.use(cors(corsOptions));

app.use(autosRutas);
app.use("/api", apiAutosRutas);
app.use("/api", apiVendedoresRutas);

app.listen(3333, () => console.log("Server Funcando"));
