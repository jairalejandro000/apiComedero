'use strict'
const ArgsFormatters = use('App/Utils/ArgsFormatter')
class User {
  get formater(){
    return ArgsFormatters
  }
  get validateAll(){
    return true
  }
  get rules () {
    return {
      email: 'required|email|min:10|max:254',
      password: 'min:3|max:16',
      username: 'max:16',
      name: 'min:3|max:40',
      lastname: 'min:5|max:40'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = User
