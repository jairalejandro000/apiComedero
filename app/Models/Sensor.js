'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {
    static get hidden(){
        return['created_at', 'updated_at']
    }
    raspberriessensors(){
        return this.belongsTo('App/Models/RaspberrySensor')
    }
}

module.exports = Sensor
