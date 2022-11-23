'use strict'

import SensorValueController from '../Http/SensorValueController'
class RaspberryController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onSensorUpdated(data){
    const sensorValue = await SensorValueController.createSensorValue(data)
    if(sensorValue){
      this.socket.broadcastToAll(sensorValue)
    }else{
      this.socket.broadcastToAll("No se pudo actualizar la informacion")
    }
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
