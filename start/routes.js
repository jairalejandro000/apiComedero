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
    Route.post('/Create', 'UserController.createUser').validator('User')
    Route.get('/Show', 'UserController.getUsers').middleware(['auth:jwt'])
    Route.get('/Profile', 'UserController.getUser').middleware(['auth:jwt'])
    Route.get('/Raspberries', 'UserController.getRasperries').middleware(['auth:jwt'])
}).prefix('/User')

Route.group(() =>{
    Route.get('/Show', 'RaspberryController.getRaspberries')
    Route.get('/:id', 'RaspberryController.getRaspberry')
    Route.post('/Create', 'RaspberryController.createRasp').validator('Raspberry')
}).prefix('/Raspberry').middleware(['auth:jwt'])

Route.group(() =>{
    Route.get('/Show', 'SensorController.getSensors')
    Route.post('/Create', 'SensorController.createSensor').validator('Sensor')
}).prefix('/Sensor').middleware(['auth:jwt'])

Route.group(() =>{
    Route.get('/Sensors/:id', 'RaspberrySensorController.getRaspSensor')
    Route.post('/Create', 'RaspberrySensorController.createRaspSensor').validator('RaspSensor')
    Route.get('/AddSensors/:id', 'RaspberrySensorController.addSensors')
    Route.put('/Update', 'RaspberrySensorController.updateRaspSensor').validator('RaspSensorUPD')
}).prefix('/RaspSensor').middleware(['auth:jwt'])

Route.group(() => {
    Route.get('/History/:id', 'SensorValueController.getRaspSensorValues')
    Route.post('/Create', 'SensorValueController.createSensorValue').validator('SensorValue')
}).prefix('SensorValues').middleware(['auth:jwt'])


Route.post('/Login', 'AuthController.login').validator('Login').prefix('/Auth')