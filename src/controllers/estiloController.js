var estiloModel = require("../models/estiloModel");

function listar(req, res) {
  estiloModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarEstilo(req, res) {
  var idEstilo = req.params.idEstilo;

  console.log("Buscando resultado...");
  estiloModel
    .buscarEstilo(idEstilo)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar os resultados de estilo.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function editarEstilo(req, res) {
  var idEstilo = req.params.idEstilo;
  var nomeEstilo = req.body.nomeEstilo;
  var descricao = req.body.descricao;

  estiloModel
    .editarEstilo(idEstilo, nomeEstilo, descricao)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao editar o estilo: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function deletarEstilo(req, res) {
  var idEstilo = req.params.idEstilo;
  estiloModel
    .deletarEstilo(idEstilo)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao deletar um estilo: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  buscarEstilo,
  editarEstilo,
  deletarEstilo,
};
