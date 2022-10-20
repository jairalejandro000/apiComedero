'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Raspberry extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
    
    raspberriessensors(){
        return this.belongsTo('App/Models/RaspberrySensor')
    }
}

module.exports = Raspberry
