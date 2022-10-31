'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {

    async login({request, auth, response}){
        const {email, password} = request.only(['email', 'password'])
        try{
            const U = await User.findBy('email', email)
            const isSame = await Hash.verify(password, U.password)
            if(isSame){
                const token = await auth.attempt(email, password)
                return response.ok(
                {msg: 'Hecho!',
                status: true,
                data: token.token})
            }else{
                return response.status(400).json(
                    {msg: 'Ocurrió un error',
                    status: false,
                    data: ''})
            }
        }catch(e){
                return response.status(400).json(
                    {msg: 'Ocurrió un error',
                    status: false,
                    data: ''})
        }
    }
}

module.exports = AuthController
