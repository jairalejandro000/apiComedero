'use strict'
const SensorValue = use('App/Models/SensorValue')
const Raspberry = use('App/Models/Raspberry')

class SensorValueController {
    async createSensorValue({request, response}){
        try{
            const sensorValueData = request.only(['value_int', 'value_float', 'value_string', 'date', 'raspberry_sensor_id'])
            const sensorValue = await SensorValue.create(sensorValueData)
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: sensorValue})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})            
        }
    }

    static async updateSensorValue(data){
        try{
            const sensorValueData = await data
            const sensorValue = await SensorValue.create(sensorValueData)
            return {msg: 'Hecho!',
                status: true,
                data: sensorValue}
        }catch(e){
            return {msg: 'Ocurrió un error',
                status: false,
                data: ''}            
        }
    }

    async getRaspSensorValues({params, response}){
        try{
            const values = await SensorValue.query().where('raspberry_sensor_id', params.id).orderBy('date', 'desc').fetch()
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: values})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }
}

module.exports = SensorValueController
