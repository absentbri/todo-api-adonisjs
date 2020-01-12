'use strict'

class UpdateTodo {
  get rules () {
    return {
      completed: 'required|boolean'
    }
  }
}

module.exports = UpdateTodo
