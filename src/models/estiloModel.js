var database = require("../database/config");

function listar() {
  console.log("Listando os estilos");
  var instrucaoSql = `SELECT * FROM Estilo`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarEstilo(idEstilo) {
  console.log("Buscando por um estilo");
  var instrucaoSql = ` SELECT * FROM Estilo WHERE idEstilo='${idEstilo}'`;

  console.log("Executando a instrução sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function editarEstilo(idEstilo, nomeEstilo, descricao) {
  console.log("Editando um um estilo");
  var instrucaoSql = `
    UPDATE Estilo SET nomeEstilo='${nomeEstilo}', descricao='${descricao}' WHERE idEstilo='${idEstilo}'`;

  console.log("Executando a instrução sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarEstilo(idEstilo) {
  console.log("Deletando registro");
  var instrucaoSql = `
            DELETE FROM Estilo WHERE idEstilo = ${idEstilo};
        `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  buscarEstilo,
  editarEstilo,
  deletarEstilo,
};
