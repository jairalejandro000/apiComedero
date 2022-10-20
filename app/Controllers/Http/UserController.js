'use strict'
const User = use('App/Models/User')

class UserController {
    async createUser({request, response}){
        const userData = request.only(['email', 'username', 'password', 'name', 'lastname'])
        if(await User.findBy('email', userData.email)){
            return response.status(400).send({message: 'Ya la cagastes'})
        }
        const user = await User.create(userData)
        return response.ok({message: 'User created succesful', user})
    }

    async getUsers({response}){
        const users = await User.all()
        return response.ok({users})
    }
}

module.exports = UserController
