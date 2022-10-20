'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SensorValue extends Model {
    RaspberrySensor(){
        return this.hasMany('App/Models/RaspberrySensor')
    }
}

module.exports = SensorValue
