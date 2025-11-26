var database = require("../database/config");

function cadastrarPontuacao(fk_usuario, pontuacao) {
  console.log("Cadastrando a pontuação do usuario");
  var instrucaoSql = `
        INSERT INTO GameMemory (fkUsuario, pontuacao) values ('${fk_usuario}', '${pontuacao}')
    `;

  console.log("Executando a instrucao SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarpontuacao(fk_usuario) {
  console.log("Buscando a pontuação do usuario");
  var instrucaoSql = `
    SELECT * from GameMemory WHERE fkUsuario='${fk_usuario}'
  `;

  console.log("Executando a instrucao SQL: " + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrarPontuacao,
  buscarpontuacao,
};
