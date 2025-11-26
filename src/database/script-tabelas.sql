DROP DATABASE IF EXISTS MakeModaMagia;
CREATE DATABASE MakeModaMagia;
USE MakeModaMagia;

-- USUARIO
CREATE TABLE Usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha CHAR(25) NOT NULL
);

-- ESTILO
CREATE TABLE Estilo (
idEstilo INT PRIMARY KEY AUTO_INCREMENT,
nomeEstilo VARCHAR(100) NOT NULL,
descricao  VARCHAR(800) NOT NULL,
paleta  VARCHAR(800) NOT NULL,
elevacao VARCHAR(800) NOT NULL,
exemplo_look VARCHAR(800) NOT NULL,
modelagens  VARCHAR(800) NOT NULL,
maquiagem  VARCHAR(800) NOT NULL,
motivacao VARCHAR(800) NOT NULL,
imageResultado VARCHAR(45) NOT NULL
);

INSERT INTO Estilo (nomeEstilo, descricao, paleta, modelagens, elevacao, exemplo_look, maquiagem, motivacao, imageResultado) VALUES

-- 1. CLÁSSICO SOFISTICADO
('Clássico Sofisticado',
'Elegância discreta, refinada e atemporal. Sua presença é sutil, segura e impecável.',
'Preto, Off White, Bege, Marrom Chocolate, Caramelo, Dourado Fosco, Cinza, Marinho',
'Blazer estruturado, camisa de alfaiataria, calça wide leg, saia midi, scarpin ou sapatilha minimalista',
'Escolha tecidos de qualidade, cintura marcada e poucos acessórios bem selecionados.',
'Camisa off + pantalona marrom + scarpin nude; Regata de crepe + saia midi off + sandália delicada; Blazer preto + calça reta + bolsa estruturada.',
'Pele natural + sobrancelhas alinhadas + batom nude',
'Elegância que não compete com você, apenas te acompanha.',
'classicosof.png'),

-- 2. ROMÂNTICO ELEGANTE
('Romântico Elegante',
'Suavidade, feminilidade e harmonia visual. Prefere fluidez, movimento e delicadeza.',
'Rose queimado, Off White, Nude, Marfim, Caramelo suave, Dourado delicado',
'Saia midi, tecidos fluidos (crepe, cetim fosco), blusa com decote suave, vestidos acinturados',
'Troque babados exagerados por cortes limpos com fluidez suave.',
'Blusa rose transpassada + saia midi off; Vestido midi acinturado + sandália nude; Regata de cetim + pantalona clara + bracelete delicado.',
'Blush rosado + iluminador suave + gloss',
 'Uma beleza que floresce e não que pesa.',
'romanticaele.png'),

-- 3. SENSUAL ELEGANTE
('Sensual Elegante',
'Feminilidade marcante com refinamento. Valoriza curvas com intenção, sem exagero.',
'Preto, Off White, Nude, Vermelho escuro, Dourado quente',
'Decote V, cintura marcada, saias midi com fenda suave, vestidos estruturados',
'Mostre menos pele e mais forma. A sensualidade fica sofisticada quando é sugerida.',
'Vestido midi preto com decote V suave; Top estruturado + pantalona off; Macacão acinturado + sandália fina.',
'Olho marcante (vinho/marrom/preto) + boca definida',
 'Você é intensidade em equilíbrio.',
'sensual.png'),

-- 4. MODERNA ELEGANTE
('Moderna Elegante',
'Identidade visual forte, linhas limpas e estética minimalista. Atual, marcante e segura.',
'Preto, Branco, Cinza quente, Cáqui, Marrom escuro, Dourado discreto',
'Blazer oversized estruturado, calça reta, vestidos minimalistas, alfaiataria contemporânea',
'Use poucos elementos, shapes bem definidos e contrastes sutis.',
'Blazer oversized + calça reta + regata minimal; Vestido midi liso + acessórios arquitetônicos; Camisa estruturada + pantalona chocolate.',
'Delineado gráfico, esfumados modernos ou boca bold',
'Estética consciente + ousadia controlada.',
'modernaele.png'),

-- 5. CASUAL ELEGANTE
('Casual Elegante',
'Conforto com intenção. Praticidade e liberdade sem perder o ar arrumado.',
'Bege, Off White, Azul petróleo, Verde oliva, Marrom, Dourado suave',
'Camisas de tricoline, malhas finas, jeans reto, calça de linho, mules, sandálias baixas',
'Troque tecidos de academia e moletom por linho, algodão premium e tricoline.',
'Camisa branca + calça de linho bege + sandália flat; Regata de malha + jeans reto + cinto caramelo; Tricô leve + pantalona clara.',
'Rímel + pele fresca + lip tint',
 'Beleza real, sem esforço e com cuidado.',
'casualele.png'),

-- 6. CRIATIVA ELEGANTE
('Criativa Elegante',
'Estilo autoral, expressivo e refinado. Gosta de criatividade com harmonia e propósito.',
'Neutros + 1 destaque colorido (oliva, azul royal, âmbar, vermelho, laranja e estampas)',
'Saia midi, camisa estrutural, vestido neutro, ponto criativo por look (cor, shape ou acessório)',
'Use apenas um elemento criativo por look: cor, shape ou acessório statement.',
'Blusa minimal + calça estampada suave; Saia midi + camisa estrutural + brinco statement; Vestido neutro + bolsa com textura.',
'Cor ou detalhe inesperado (lápis colorido, glitter suave, delineado editorial)',
 'Expressão com propósito, nunca aleatória.',
'criativaele.png');


-- RESULTADO_ESTILO
CREATE TABLE Resultado_Quiz (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT NOT NULL,
	FOREIGN KEY (fkUsuario) 
		REFERENCES Usuario(id),
fkEstilo INT NOT NULL,
	FOREIGN KEY (fkEstilo) 
		REFERENCES Estilo(idEstilo),
dataResultado DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- JOGO
CREATE TABLE GameMemory (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT NOT NULL,
	FOREIGN KEY (fkUsuario) 
		REFERENCES Usuario(id),
pontuacao INT NOT NULL,
dataJogo DATETIME DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM Usuario;

