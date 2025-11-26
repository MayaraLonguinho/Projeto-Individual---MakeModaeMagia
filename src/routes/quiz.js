var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar-resultado", function (req, res) {
  quizController.cadastrarResultado(req, res);
});

router.get("/buscar-resultado/:idUsuario", function (req, res) {
  quizController.buscarResultado(req, res);
});

module.exports = router;
