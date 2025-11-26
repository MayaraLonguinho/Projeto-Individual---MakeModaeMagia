var database = require("../database/config");

function cadastrarResultado(fk_usuario, fk_estilo) {
  console.log("Cadastrando o resultado do quiz");
  var instrucaoSql = `
        INSERT INTO Resultado_Quiz(fkUsuario, fkEstilo) values 
        ('${fk_usuario}', '${fk_estilo}')`;

  console.log("Executando a instrução sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarResultado(fk_usuario) {
  console.log("Buscando o resultado do quiz");
  var instrucaoSql = `
        SELECT * FROM Resultado_Quiz WHERE fkUsuario='${fk_usuario}'
    `;

  console.log("Executando a instrução sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrarResultado,
  buscarResultado,
};
