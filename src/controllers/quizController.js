var quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {
  var usuarioId = req.body.usuarioIdServer;
  var estiloId = req.body.estiloIdServer;

  if (usuarioId == undefined) {
    res.status(400).send("Usuario não identificado");
  } else if (estiloId == undefined) {
    res.status(400).send("Estilo não encontrado");
  }

  quizModel
    .cadastrarResultado(usuarioId, estiloId)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarResultado(req, res) {
  var idUsuario = req.params.idUsuario;

  console.log("Recuperando registros");

  quizModel
    .buscarResultado(idUsuario)
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
        "Houve um erro ao buscar os resultados do quiz.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrarResultado,
  buscarResultado,
};
