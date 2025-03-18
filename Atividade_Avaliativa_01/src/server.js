const express = require("express");
const UserController = require("./controller/userController");
const ProjectController = require("./controller/projectController");
const TaskController = require("./controller/taskController");

const app = express();
const port = 3000;

const userController = new UserController();
const projectController = new ProjectController();
const tarefaController = new TaskController();

app.use(express.json());

// Rotas do CRUD de Usuários
app.get("/usuarios", (req, res) => userController.getAll(req, res));
app.post("/usuarios", (req, res) => userController.create(req, res));
app.put("/usuarios/:id", (req, res) => userController.update(req, res));
app.delete("/usuarios/:id", (req, res) => userController.delete(req, res));

//Rotas CRUD Projetos
app.get("/projetos", (req, res) => projectController.getAll(req, res));
app.post("/projetos", (req, res) => projectController.create(req, res));
app.put("/projetos/:id", (req, res) => projectController.update(req, res));
app.delete("/projetos/:id", (req, res) => projectController.delete(req, res));

//Rotas CRUD Projetos
app.get("/tarefas", (req, res) => tarefaController.getAll(req, res));
app.post("/tarefas", (req, res) => tarefaController.create(req, res));
app.put("/tarefas/:id", (req, res) => tarefaController.update(req, res));
app.delete("/tarefas/:id", (req, res) => tarefaController.delete(req, res));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
