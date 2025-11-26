var gameMemoryModel = require("../models/gameMemoryModel");

function cadastrarPontuacao(req, res) {
  var idUsuario = req.body.idUsuario;
  var pontuacao = req.body.pontuacao;

  gameMemoryModel
    .cadastrarPontuacao(idUsuario, pontuacao)
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

function buscarpontuacao(req, res) {
  var idUsuario = req.params.idUsuario;

  gameMemoryModel
    .buscarpontuacao(idUsuario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar a pontuação do usuario.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrarPontuacao,
  buscarpontuacao,
};
