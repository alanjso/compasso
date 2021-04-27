# Roteiro Entrevista Node.js

====================================================================================================
## Inicialização com PM2 ou Docker
### Executar os comandos a seguir no terminal dentro da pasta do projeto para inicialização com PM2:

- npm install
- npm install pm2 -g

No windows
- pm2 start .\ecosystem.config.js 

No linux
- pm2 start ecosystem.config.js

### Executar os comandos a seguir no terminal dentro da pasta do projeto para inicialização com Docker:
- Alterar a informação "host" do arquivo development.json de "host": "localhost" para "host": "mongo"
- docker build -t compasso-uol .  
- docker run -d -p 4001:4001 --link mongo --name compasso-uol -e "NODE_ENV=development" -e TZ=Brazil/East compasso-uol
- docker logs -f compasso-uol

OBS: Em ambos os cenários (pm2 ou docker) o MongoDB encontrasse rodando com docker e mapeado as portas 27017-27019->27017-27019 e nome de imagem e container 'mongo'

## Ambiente de desenvolvimento
### Executar os comandos a seguir no terminal dentro da pasta do projeto para inicialização com nodemon
- npm install
- npm install nodemon -g
- nodemon start
====================================================================================================

## Objetivo

Nosso objetivo com este passo do processo de recrutamento é conhecer melhor as suas habilidades técnicas.

Conhecendo você melhor, poderemos selecionar quais desafios já podemos passar para você e quais precisaremos preparar você melhor para enfrentá-los.

## Requisitos da entrega

Nesta estapa esperamos que você construa o código que contemple as seguintes operações expostas como endpoints REST para:

- Cadastrar cidade √
- Cadastrar cliente √
- Consultar cidade pelo nome √
- Consultar cidade pelo estado √
- Consultar cliente pelo nome √
- Consultar cliente pelo Id √
- Remover cliente √
- Alterar o nome do cliente √

Considere o cadastro com dados básicos:

- Cidades: nome e estado √
- Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora. √

## Cenário

No nosso dia-a-dia trabalhamos com o desenvolvimento de microserviços desenvolvidos utilizando Node. Buscamos automação dos processos de garantia da qualidade, testes, deployment e release.

## Critérios

### Avaliação

A avaliação será feita da seguinte forma:

1. Vamos analisar e compilar o seu código;
2. Rodar sua aplicação e executar testes para validar o atendimento funcional dos items acima;
3. Verificar se o seu código é limpo (Clean Code), fácil de entender e de dar manutenção;
4. Durante entrevista, simularemos uma revisão do seu código, percorremos o código junto com você para discutirmos sobre suas decisões de implementação, os pontos positivos e negativos;
5. O saldo entre o que for positivo e o que for negativo vai determinar a recomendação do ponto de vista técnico ou não de sua contratação, se faltar pouco para atingir uma recomendação positiva, daremos um prazo para você corrigir e retornar;

Requisitos Obrigatórios:

- Operações acima funcionando sem erros √
- Código válido, estruturado e organizado para que possamos testar sua aplicação √

Utilização de Node 10+ o resto é por sua conta escolher. √

Dicas:

- Tenha em mente que o seu avaliador irá executar o código antes de falar com você; √
- Procure fazer uma entrega simples mas consistente, usando a experiência e conhecimento adquiridos durante sua carreira;
- Não se preocupe em entregar algo extremamente completo ou rebuscado, não vamos usar este código em produção;
- Tudo será avaliado, dê o seu melhor!
- Evite fazer Pull Request ou Fork deste repositório.