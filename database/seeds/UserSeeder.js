'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.truncate()

    const user = new User()

    user.username = 'brian'
    user.email = 'brian@ramsey.cloud'
    user.password = 'password'

    await user.save()
  }
}

module.exports = UserSeeder
