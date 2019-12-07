'use strict'

/*
|--------------------------------------------------------------------------
| TodoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Todo = use('App/Models/Todo')

Factory.blueprint('App/Models/Todo', async (faker) => {
  return {
    title: faker.sentence(),
    completed: faker.bool(),
    user_id: 1
  }
})

class TodoSeeder {
  async run () {
    await Todo.truncate()

    const todo = await Factory
      .model('App/Models/Todo')
      .createMany(10)
  }
}

module.exports = TodoSeeder
