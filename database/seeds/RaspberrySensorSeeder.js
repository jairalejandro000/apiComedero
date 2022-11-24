'use strict'

/*
|--------------------------------------------------------------------------
| RaspberrySensorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RaspberrySensorSeeder {
  async run () {
    await Database.table('raspberry_sensors').insert([
    {
      raspberry_id: 1,
      sensor_id: 1
    },
    {
      raspberry_id: 1,
      sensor_id: 3
    },
    {
      raspberry_id: 1,
      sensor_id: 2
    },
    {
      raspberry_id: 1,
      sensor_id: 4
    },
    {
      raspberry_id: 1,
      sensor_id: 6
    }])
  }
}

module.exports = RaspberrySensorSeeder
