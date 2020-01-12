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
    const update = await todo.save()
    console.log(update)

    response.send(todo.toJSON())
  }
  async delete({ request, response }){

  }
}

module.exports = TodoController
