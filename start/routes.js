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
    Route.post('/Create', 'UserController.createUser').validator('User')
    Route.get('/Profile', 'UserController.getUser').middleware(['auth:jwt'])
    Route.get('/Raspberries', 'UserController.getRasperries')
}).prefix('/User')

Route.group(() =>{
    Route.post('/Create', 'RaspberryController.createRasp').validator('Raspberry')
    Route.get('/Show', 'RaspberryController.getRaspberries').middleware(['auth:jwt'])
}).prefix('/Raspberry')

Route.group(() =>{
    Route.post('/Create', 'SensorController.createSensor').validator('Sensor')
    Route.get('/Show', 'SensorController.getSensors').middleware(['auth:jwt'])
}).prefix('/Sensor')

Route.group(() =>{
    Route.post('/Create', 'RaspberrySensorController.createRaspSensor').validator('RaspSensor')
    Route.get('/Sensors', 'RaspberrySensorController.getRaspSensor')
    Route.put('/Update', 'RaspberrySensorController.updateRaspSensor')
}).prefix('/RaspSensor')



Route.post('/Login', 'AuthController.login').validator('User').prefix('/Auth')