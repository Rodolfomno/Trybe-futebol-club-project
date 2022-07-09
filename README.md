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
| `GET - localhost:3001/tasks` | Retorna todas as tarefas. |
| `GET - localhost:3001/tasks/:id` | retorna task através do id params. |
| `GET - localhost:3001/tasks/search` | Retorna tarefa por titulo atraves de uma query. |
| `POST - localhost:3001/tasks` | Cria uma nova tarefa. |
| `PUT - localhost:3001/tasks` | Atualiza uma tarefa existente |
| `DELETE - localhost:3001/tasks/:id` | Deleta uam tarefa. |
