'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index({ request, response }) {
    const todos = await Todo.query()
      .orderBy('id', 'desc')
      .limit(request.get()._limit || 10)
      .fetch()

    response.send(todos.toJSON())
  }
  async create({ request, response }) {
    const todoData = request.only(['title', 'completed']);
    const todo = await Todo.create(todoData)

    response.status(201)
      .send(todo.toJSON())
  }
}

module.exports = TodoController
