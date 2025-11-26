var express = require("express");
var router = express.Router();

var gameMemoryController = require("../controllers/gameMemoryController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar-pontuacao", function (req, res) {
  gameMemoryController.cadastrarPontuacao(req, res);
});

router.get("/buscar-pontuacao/:idUsuario", function (req, res) {
  gameMemoryController.buscarpontuacao(req, res);
});

module.exports = router;
