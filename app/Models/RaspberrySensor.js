'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RaspberrySensor extends Model {
    static get hidden(){
        return['created_at', 'updated_at']
    }
    raspberries(){
        return this.belongsTo('App/Models/Raspberry')
    }
    sensors(){
        return this.belongsTo('App/Models/Sensor')
    }
    sensor_values(){
        return this.hasOne('App/Models/SensorValue')
    }
}

module.exports = RaspberrySensor
