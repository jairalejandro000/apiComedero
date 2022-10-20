'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() =>{
    Route.get('/Show', 'UserController.getUsers').middleware(['auth:jwt'])
    Route.post('/Create', 'UserController.createUser').validator('Register')
}).prefix('/User')

Route.post('/login', 'AuthController.logIn').validator('User').prefix('/Auth')