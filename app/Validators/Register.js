'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')

class Register {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      email: 'required|email|min:10|max:254',
      password: 'required|min:3|max:16',
      username: 'required|max:16',
      name: 'required|min:3|max:40',
      lastname: 'required|min:5|max:40'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send({
      msg: 'Ocurrió un error',
      status: false,
      data: errorMessages})
  }
}

module.exports = Register
