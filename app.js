const app = require("express")()
var bodyParser = require ("body-parser")
const { request, response } = require("express")

app.use(bodyParser.json()) //app.use --- define que o bodyParser entra entre cada requisição ---- bodyParser está na documentação do app

let users = [
  {id: 0, nome: 'fabiano', idade: "23"},
   {id: 2, nome: 'Israel', idade:"29" },
   {id: 3, nome: 'fdgfd', idade:"11" },
   {id: 1, nome: '´kopio', idade:"22" },
   ]

  app.get('/users', (request, response) => response.json(users))

app.get('/:id', (request, response) =>
  response.json(users.filter(value => value.id == request.params.id)
))
app.get('/users/:nome/:idade', (request, response) =>
  response.json(users.filter(value => value.idade == request.params.idade)
))


app.get('/users/:id', (request, response) =>
  response.json(users.filter(value => value.id == request.params.id)
))


app.post("/users", (request, response) =>{
  const user = request.body
users.push(user)
response.json(user)
})

app.put("/users/:id", (request, response) =>{
 const id = request.params.id
 const idade = request.body.idade

 let user = users.filter(value => value.id == id)

 user[0].idade = idade;
response.json(user[0]);
})

app.delete("/users/:id", (request, response) => {
  const id = request.params.id
  users = users.filter(value => value.id != id)
  response.json(users)
})
    
app.listen(8081);