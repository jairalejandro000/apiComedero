'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {
    raspberriessensors(){
        return this.belongsTo('App/Models/RaspberrySensor')
    }
}

module.exports = Sensor
