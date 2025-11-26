var database = require("../database/config");

function totalPontos(id) {
    console.log("Recuperando o total de pontos...")
    var instrucao = `
        SELECT 
            pontuacao AS pontos,
            dataJogo
        FROM GameMemory
        WHERE fkUsuario = '${id}'
        ORDER BY dataJogo DESC LIMIT 10;
        `;

    console.log("Executando a instrução:", instrucao);
    return database.executar(instrucao)
}

function maiorPontuacao(id) {
    console.log("Recuperando a maior pontuação...")
    var instrucao = `
       SELECT 
            MAX(pontuacao) AS maiorPontuacao
        FROM GameMemory
        WHERE fkUsuario = '${id}';
        `;
    console.log("Executando a instrução:", instrucao);
    return database.executar(instrucao)
}

function nivelPontos(id) {
    console.log("Recuperando o nível...")
    var instrucao = `
            SELECT 
            MAX(pontuacao) AS maiorPontuacao,
                CASE
                    WHEN MAX(pontuacao) BETWEEN 0 AND 180 THEN 'Iniciante Elegante'
                    WHEN MAX(pontuacao) BETWEEN 181 AND 300 THEN 'Intermediário Estiloso'
                    WHEN MAX(pontuacao) >= 301 THEN 'Mestre da Sofisticação'
                    ELSE 'Sem Pontuação'
                END AS nivel
            FROM GameMemory
            WHERE fkUsuario = '${id}';
        `;
    console.log("Executando a instrução:", instrucao);
    return database.executar(instrucao)
}

function totalJogos(id) {
    console.log("Recuperando o total de jogos...")
    var instrucao = `
            SELECT 
                COUNT(*) AS totalJogos
            FROM GameMemory
            WHERE fkUsuario = '${id}';
        `;
    console.log("Executando a instrução:", instrucao);
    return database.executar(instrucao)
}

module.exports = {
    totalPontos,
    maiorPontuacao,
    nivelPontos,
    totalJogos
};
