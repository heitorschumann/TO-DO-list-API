import { database } from "../infra/database.js";

class Tarefas {
	static router(app) {
		app.get("/tarefas", (req, res) => {
			res.status(200).json(database);
		});

		app.post("/tarefas", (req, res) => {
			database.push(req.body);
			res
				.status(201)
				.json(
					"Rota POST de tarefa ativada: tarefa adicionada ao banco de dados"
				);
		});
	}
}
export default Tarefas;
