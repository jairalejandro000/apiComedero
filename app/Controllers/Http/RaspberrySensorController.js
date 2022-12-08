'use strict'
const RaspSensor = use('App/Models/RaspberrySensor')
const Database = use('Database')

class RaspberrySensorController {
    //This method create a new sensor
    async createRaspSensor({request, response}){
        try{
            const raspData = request.only(['sensor_id', 'raspberry_id'])
            const raspSensor = await RaspSensor.create(raspData)
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: raspSensor})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }
    //This method return the list of sensors of specific a raspberry
    async getRaspSensor({params, response}){
        const raspSensors = await RaspSensor.query().with('sensor').with('sensorValue').where('raspberry_id', params.id).fetch()
        return response.ok(
            {msg: 'Hecho!',
            status: true,
            data: raspSensors})
    }

    //This method update the sensor in the raspberry
    async updateRaspSensor({request, response}){
        try{
            const raspData = request.only(['sensor_id', 'raspberry_id', 'newSensor_id'])
            const raspSensor = await RaspSensor.findBy({raspberry_id: raspData.raspberry_id,  sensor_id: raspData.sensor_id})
            if(raspSensor){
                raspSensor.sensor_id = raspData.newSensor_id
                if(await raspSensor.save()){
                    return response.ok(
                        {msg: 'Hecho!',
                        status: true,
                        data: raspSensor})
                }else{
                    return response.status(400).send(
                        {msg: 'Ocurrió un error',
                        status: false,
                        data: ''})
                }
            }
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
            }
    }

    async addSensors({params, response}){
        try{
            await Database.table('raspberry_sensors').insert([
                {
                    raspberry_id: params.id,
                    sensor_id: 1
                },
                {
                    raspberry_id: params.id,
                    sensor_id: 2
                },
                {
                    raspberry_id: params.id,
                    sensor_id: 3
                },
                {
                    raspberry_id: params.id,
                    sensor_id: 4
                },
                {
                    raspberry_id: params.id,
                    sensor_id: 5
                }])
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: ''})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
            }
    }
}

module.exports = RaspberrySensorController
