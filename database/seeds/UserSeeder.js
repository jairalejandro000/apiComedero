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

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const Database = use('Database')

class UserSeeder {
  static async run () {
    await Database.table('users').insert([
      {
        username: 'Ing Perron',
        name: 'Jair Alejandro',
        lastname: 'Martínez Carrillo',
        email: 'elpython@gmail.com',
        password: await Hash.make('123')
      },
      {
        username: 'Pendejo',
        name: 'Gutty mierda',
        lastname: 'Basura inutil',
        email: 'elprimodeguko@gmail.com',
        password: await Hash.make('soyunpendejo')
      },
      {
        username: 'Danielito',
        name: 'Daniel',
        lastname: 'Granados',
        email: 'danielito@gmial.com',
        password: await Hash.make('12345678')
      },
    ]);
  }
}

module.exports = UserSeeder
