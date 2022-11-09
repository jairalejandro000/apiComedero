'use strict'

/*
|--------------------------------------------------------------------------
| SensorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SensorSeeder {
 static async run () {
    await Database.table('sensors').insert([
      {
        name: 'Ultrasónico'
      },
      {
        name: 'Temperatura'
      },
      {
        name: 'Ultrasónico de agua'
      },
      {
        name: 'Motor a pasos'
      },
      {
        name: 'Bomba de agua'
      }
    ]);
  }
}

module.exports = SensorSeeder
