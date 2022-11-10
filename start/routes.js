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
    Route.get('/Raspberries', 'UserController.getRasperries').middleware(['auth:jwt'])
}).prefix('/User')

Route.group(() =>{
    Route.post('/Create', 'RaspberryController.createRasp').middleware(['auth:jwt'])
    Route.get('/Show', 'RaspberryController.getRaspberries').middleware(['auth:jwt'])
}).prefix('/Raspberry')

Route.group(() =>{
    Route.post('/Create', 'SensorController.createSensor').validator('Sensor').middleware(['auth:jwt'])
    Route.get('/Show', 'SensorController.getSensors').middleware(['auth:jwt'])
}).prefix('/Sensor')

Route.group(() =>{
    Route.post('/Create', 'RaspberrySensorController.createRaspSensor').validator('RaspSensor').middleware(['auth:jwt'])
    Route.get('/Sensors/:id', 'RaspberrySensorController.getRaspSensor').middleware(['auth:jwt'])
    Route.put('/Update', 'RaspberrySensorController.updateRaspSensor').middleware(['auth:jwt'])
}).prefix('/RaspSensor')

Route.group(() => {
    Route.post('/Create', 'SensorValueController.createSensorValue').validator('SensorValue').middleware(['auth:jwt'])
    Route.get('/History/:id', 'SensorValueController.getRaspSensorValues').middleware(['auth:jwt'])
}).prefix('SensorValues')



Route.post('/Login', 'AuthController.login').validator('User').prefix('/Auth')