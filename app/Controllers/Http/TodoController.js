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
  async store({ request, response }) {
    const todoData = request.only(['title', 'completed'])
    const todo = await Todo.create(todoData)

    response.status(201)
      .send(todo.toJSON())
  }
  async update({ request, response, params }){
    const todoData = request.only(['completed'])
    const todo = await Todo.find(params.id)
    todo.merge(todoData)

    if(await todo.save()) response.send(todo.toJSON())
    else response.code(400)
  }
  async destroy({ request, response, params }){
    const todo = await Todo.find(params.id)

    if(await todo.delete()) response.send({}) // should just be a 204 but example API returns empty 200
    else response.code(400).send({})
  }
}

module.exports = TodoController
