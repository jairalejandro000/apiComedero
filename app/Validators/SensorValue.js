'use strict'

class SensorValue {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      date: 'required',
      raspberry_sensor_id: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send({
      msg: 'Ocurrió un error',
      status: false,
      data: errorMessages})
  }
}

module.exports = SensorValue
