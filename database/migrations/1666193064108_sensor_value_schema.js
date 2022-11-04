'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SensorValueSchema extends Schema {
  up () {
    this.create('sensor_values', (table) => {
      table.increments()
      table.integer('value_int', 10)
      table.float('value_float', 10, 2)
      table.string('value_string', 10)
      table.datetime('date')
      table.integer('raspberry_sensor_id').unsigned().references('id').inTable('raspberry_sensors')
      table.timestamps()
    })
  }

  down () {
    this.drop('sensor_values')
  }
}

module.exports = SensorValueSchema
