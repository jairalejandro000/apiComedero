'use strict'

const  SensorValueController = require('../Http/SensorValueController')
class RaspberryController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onUpdate(data){
    const sensorValue = await SensorValueController.updateSensorValue(data)
    if(sensorValue.status == true){
      await this.socket.broadcastToAll("data", sensorValue)
    }else{
      await this.socket.broadcastToAll("data", sensorValue)
    }
  }

  async onMotor(data){
    await this.socket.broadcastToAll("data", {
      "moveMotor": data.motor
    })
  }

/*
"data": {
  "value_int": 1,
  "value_float": null,
  "value_string": null,
  "date": ,
  "rasoberry_sensor_id":  
}
*/
}

module.exports = RaspberryController
