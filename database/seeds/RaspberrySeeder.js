'use strict'

/*
|--------------------------------------------------------------------------
| RaspberrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RaspberrySeeder {
  static async run () {
    await Database.table('raspberries').insert({
      name: 'Paiton',
      user_id: 3
    })
  }
}

module.exports = RaspberrySeeder
