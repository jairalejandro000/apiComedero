'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')

class RaspSensor {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      sensor_id: 'required',
      raspberry_id: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = RaspSensor
