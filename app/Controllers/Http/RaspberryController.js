'use strict'
const Raspberry = use('App/Models/Raspberry')
const jwt_decode = use('jwt-decode')
class RaspberryController {

    //This method create a new raspberry
    async createRasp({request, response}){
        try{
            const auth = request.headers()
            const token = auth.authorization
            const decode = jwt_decode(token);
            const raspData = request.only(['name'])
            raspData.user_id = await decode.uid
            const raspberry = await Raspberry.create(raspData)
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: raspberry})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }

    //This method return all raspberries
    async getRaspberries({response}){
        try{
            const raspberries = await Raspberry.all()
            return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: raspberries})
        }catch(e){
            return response.status(400).send(
                {msg: 'Ocurrió un error',
                status: false,
                data: ''})
        }
    }
}

module.exports = RaspberryController
