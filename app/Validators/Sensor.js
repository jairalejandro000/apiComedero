'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')
class Sensor {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'min:3|max:20'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Sensor
