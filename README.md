# Adonis API application

Seeds a Todo API app to connect with vue-todo project as back end.

Schema for project based off/to be interoperable with https://jsonplaceholder.typicode.com/todos

### Locally

#### Setup

Clone this repo then run

```bash
npm install
``` 

#### Migrations

Run the following command to run startup migrations.

```bash
adonis migration:run
```

#### Seed test data

```bash
adonis seed
```

#### Starting

Run the following to run the server

```bash
adonis serve --dev
```

### Docker

#### Manually
##### interactive
```
docker run -it -p 8000:8000 --name todo-api-adonis absentbri/todo-api-adonis
```
##### headless
```
docker run -d -p 8000:8000 --name todo-api-adonis absentbri/todo-api-adonis
```

#### Compose
##### Build on any code changes
```bash
docker-compose build
```
##### Run
```bash
docker-compose up
```
