'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index({ request, response }) {
    const todos = await Todo.query()
      .limit(request.get()._limit || 10)
      .fetch()

    response.send(todos.toJSON())
  }
}

module.exports = TodoController
