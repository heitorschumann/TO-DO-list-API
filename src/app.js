import express from "express";
import Usuarios from "../controller/usuarios.js";
import Tarefas from "../controller/tarefas.js";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Servidor disponivel em http://localhost:${port}`);
});

Usuarios.router(app);
Tarefas.router(app);
