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
      name: 'required|min:3|max:20',
      user_id: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Raspberry
