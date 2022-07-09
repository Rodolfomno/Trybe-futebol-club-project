O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

Responsável por desenvolver uma API (utilizando o método `TDD`) e também integra *- através do docker-compose -* as aplicações para que funcionem consumindo um banco de dados.

# Habilidades

Nesse projeto: **um back-end dockerizado utilizando modelagem de dados através do Sequelize**.

 - Realiza a dockerização dos apps, network, volume e compose;
 - Modela dados com **MySQL** através do **Sequelize**;
 - Cria e associa tabelas usando `models` do `sequelize`;
 - **API REST** com endpoints para consumir os models criados;
 - Faz um `CRUD` utilizando `ORM`;
 - Utiliza Typescript com POO;
 - Realiza testes de integração


# Pré-requisitos

O compose precisa estar na versão 1.29.2;

No seu terminal digite:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

## Como usar


No seu terminal digite:
```
git@github.com:Rodolfomno/Trybe-futebol-club-project.git

```
## Inicializando a aplicação

Já na pasta raiz do projeto use o comando:

```
npm run compose:up
```

Após terminar, acesse o link

[http://localhost:3000/](http://localhost:3000/)


## Logar como usuario

```
email: user@user.com
senha: secret_user

```
## Logar como admin

```
email: admin@admin.com
senha: secret_admin

```


## API Endpoints
A aplicação contem os seguintes endpoints:

| Method | Description |
|---|---|
| `POST - localhost:3001/login` | Cria novo login |
| `GET - localhost:3001/login/validate` | retorna token valido. |
| `GET - localhost:3001/teams/` | Retorna todos os times. |
| `POST - localhost:3001/teams/:id` | Retorna time por id. |
| `GET - localhost:3001/leaderboard` | Retorna todos os resultados. |
| `GET - localhost:3001/leaderboard/home` | Retorna resultados dos times da casa. |
| `GET - localhost:3001/leaderboard/away` | Retorna resultados dos times de fora. |
| `GET - localhost:3001/matches` | Retorna todas as partidas. |
| `POST - localhost:3001/matches` | Cria uma nova partida. |
| `PATCH - localhost:3001/matches/:id/finish` | Finaliza uma partida. |
| `PATCH - localhost:3001/matches/:id/` | Atualiza uma partida. |




