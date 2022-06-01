# Habilidades

O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

Responsável por desenvolver uma API (utilizando o método `TDD`) e também integra *- através do docker-compose -* as aplicações para que funcionem consumindo um banco de dados.

Nesse projeto: **um back-end dockerizado utilizando modelagem de dados através do Sequelize**.

 - Realiza a dockerização dos apps, network, volume e compose;
 - Modela dados com **MySQL** através do **Sequelize**;
 - Cria e associa tabelas usando `models` do `sequelize`;
 - **API REST** com endpoints para consumir os models criados;
 - Faz um `CRUD` utilizando `ORM`;
 - Utiliza Typescript com POO;
 - Realiza testes de integração


# Como utilizar

1 -  No seu terminal utilize o comando npm install na raiz do projeto;
    npm install na pasta /app/backend e npm install na pasta /app/frontend (node version 16)

2 - Na pasta raiz, utilize o comando npm run compose:up

2.1 - o compose precisa estar na versão 1.29.2;

2.2 - caso não esteja, copie e cole esses dois comandos no terminal linux;

2.3 - sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

2.4 - sudo chmod +x /usr/local/bin/docker-compose

3 - agora basta acessar no seu browser a rota http://localhost:3000/

4 - para fazer o login;
    como user
      - email: user@user.com
      - senha: secret_user
    como admin
      - email: admin@admin.com
      - senha: secret_admin

4 - Que vença o torneio o melhor time!
