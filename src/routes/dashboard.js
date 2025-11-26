var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-pontos/:id", function (req, res) {
  dashboardController.totalPontos(req, res);
});

router.get("/maior-pontuacao/:id", function (req, res) {
  dashboardController.maiorPontuacao(req, res);
});

router.get("/nivel/:id", function (req, res) {
  dashboardController.nivelPontos(req, res);
});

router.get("/total-jogos/:id", function (req, res) {
  dashboardController.totalJogos(req, res);
});

module.exports = router;
