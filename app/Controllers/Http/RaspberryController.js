'use strict'
const Raspberry = use('App/Models/Raspberry')
class RaspberryController {

    //This method create a new raspberry
    async createRasp({request, response}){
        try{
            const raspData = request.only(['name', 'user_id'])
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
