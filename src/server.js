import express from "express";
import __dirname from "./utils.js";
import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js";
import {config} from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/public`));

app.use("/api/productos", productsRouter);
app.use("/api/carrito", cartsRouter);

app.use((req, res)=>{ res.status(404).json({error: -2, descripcion: `ruta ${req.originalUrl} método ${req.method} no implementada`}) });

const server = app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
server.on("error", err => console.log(`Oh no! Something is broken on the server: ${err}`));