'use strict'
const Sensor = use('App/Models/Sensor')
class SensorController {
    
    //This method create a new sensor
    async createSensor({request, response}){
        try{
            const sensorData = request.only(['name'])
            const sensor = await Sensor.create(sensorData)
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: sensor})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }

    //This method return all sensors
    async getSensors({response}){
        try{
            const sensors = await Sensor.all()
            return response.ok(
                {msg: 'Hecho!',
                satus: true,
                data: sensors})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }
}

module.exports = SensorController
