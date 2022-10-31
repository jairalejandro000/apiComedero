'use strict'
const User = use('App/Models/User')
const Raspberry = use('App/Models/Raspberry')
const jwt_decode = use('jwt-decode')
class UserController {

    //This method create a new user
    async createUser({request, response}){
        try{
            const userData = request.only(['email', 'username', 'password', 'name', 'lastname'])
            if(await User.findBy('email', userData.email)){
                return response.status(400).send(
                    {msg: 'Ocurrió un error',
                    status: false,
                    data: ''})
            }
            const user = await User.create(userData)
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: user})

        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }

    //This method return the user data
    async getUser({request, response}){
        try{
            const auth = request.headers()
            const token = auth.authorization
            const decode = jwt_decode(token);
            const user = await User.findBy('id', await decode.uid)
            if(user){
                return response.ok(
                    {msg: 'Hecho!',
                    status: true,
                    data: user})
            }else{
                return response.status(400).send(
                    {msg: 'Ocurrió un error',
                    status: false,
                    data: ''})
            }
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }

    //This method return all users
    async getUsers({response}){
        try{
            const users = await User.all()
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: users})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                statu: false,
                data: ''})
        }
    }

    //This method return all raspberries relations with the user
    async getRasperries({request, response}){
        try{
            const auth = request.headers()
            const token = auth.authorization
            const decode = jwt_decode(token);
            const user = await User.findBy('id', await decode.uid)
            if(user){
                const raspberries = await Raspberry.query().where('user_id', user.id).fetch()
                return response.ok(
                    {msg: 'Hecho!',
                    status: true,
                    data: raspberries})
            }else{
                return response.status(400).send(
                    {msg: 'Ocurrió un error',
                    status: false,
                    data: ''})
            }
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }
}

module.exports = UserController
