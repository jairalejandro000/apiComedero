'use strict'

class RaspSensorUPD {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      sensor_id: 'required',
      raspberry_id: 'required',
      newSensor_id: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send({
      msg: 'Ocurrió un error',
      status: false,
      data: errorMessages})
  }
}

module.exports = RaspSensorUPD
