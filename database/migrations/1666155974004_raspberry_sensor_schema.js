'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RaspberrySensorSchema extends Schema {
  up () {
    this.create('raspberry_sensors', (table) => {
      table.increments()
      table.integer('raspberry_id').unsigned().references('id').inTable('raspberries')
      table.integer('sensor_id').unsigned().references('id').inTable('sensors')
      table.timestamps()
    })
  }

  down () {
    this.drop('raspberry_sensors')
  }
}

module.exports = RaspberrySensorSchema
