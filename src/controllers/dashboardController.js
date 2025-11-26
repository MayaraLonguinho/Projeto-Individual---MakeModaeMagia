var dashboardModel = require("../models/dashboardModel");

function totalPontos(req, res) {
    var id = req.params.id;

    dashboardModel.totalPontos(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar total de pontos! Erro: ",
                erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function maiorPontuacao(req, res) {
    var id = req.params.id;

    dashboardModel.maiorPontuacao(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar maior pontuação! Erro: ",
                erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function nivelPontos(req, res) {
    var id = req.params.id;

    dashboardModel.nivelPontos(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar maior pontuação! Erro: ",
                erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function totalJogos(req, res) {
    var id = req.params.id;

    dashboardModel.totalJogos(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar total de jogos! Erro: ",
                erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    totalPontos,
    maiorPontuacao,
    nivelPontos,
    totalJogos
};