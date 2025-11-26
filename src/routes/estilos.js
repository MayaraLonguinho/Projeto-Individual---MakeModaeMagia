var express = require("express");
var router = express.Router();

var estiloController = require("../controllers/estiloController");

router.get("/listar", function (req, res) {
  estiloController.listar(req, res);
});

router.get("/buscar-estilo/:idEstilo", function (req, res) {
  estiloController.buscarEstilo(req, res);
});

router.get("/editar/:idEstilo", function (req, res) {
  estiloController.editarEstilo(req, res);
});

router.get("/deletar/:idEstilo", function (req, res) {
  estiloController.deletarEstilo(req, res);
});

module.exports = router;
