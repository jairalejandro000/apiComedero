'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RaspberrySensor extends Model {
    raspberries(){
        return this.belongsTo('App/Models/Raspberry')
    }
    sensors(){
        return this.belongsTo('App/Models/Sensor')
    }
    sensor_values(){
        return this.hasMany('App/Models/SensorValue')
    }
}

module.exports = RaspberrySensor
