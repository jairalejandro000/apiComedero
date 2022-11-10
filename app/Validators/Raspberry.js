'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')

class Raspberry {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      name: 'required|min:3|max:20'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send({
      msg: 'Ocurrió un error',
      status: false,
      data: errorMessages})
  }
}

module.exports = Raspberry
