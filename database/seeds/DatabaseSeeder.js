'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UserSeeder = use('./UserSeeder')
const SensorSeeder = use('./SensorSeeder')
const RaspberrySeeder = use('./RaspberrySeeder')
const RaspberrySensorSeeder = use('./RaspberrySensorSeeder')

class DatabaseSeeder {
  async run () {
    await UserSeeder.run();
    await SensorSeeder.run();
    await RaspberrySeeder.run();
    await RaspberrySensorSeeder.run();
  }
}

module.exports = DatabaseSeeder
