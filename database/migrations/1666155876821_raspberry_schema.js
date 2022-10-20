'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RaspberrySchema extends Schema {
  up () {
    this.create('raspberries', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('raspberries')
  }
}

module.exports = RaspberrySchema
