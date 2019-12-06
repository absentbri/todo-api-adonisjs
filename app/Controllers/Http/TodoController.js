'use strict'

class TodoController {
  index({ request, response }) {
    // const todos = Todo.all();
    response.send({ greeting: "Henlo, Fren!"})
  }
}

module.exports = TodoController
