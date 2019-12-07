'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index({ response }) {
    const todos = await Todo.all()

    response.send(todos.toJSON())
  }
}

module.exports = TodoController
