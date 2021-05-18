// Import dependiencies
import { Router } from 'express';

// Controllers
import {
    CityController } from './Controllers';

const router = Router();

const EndpointMethod = {
    GetAll: '/All',
    Add: '/Add',
    GetCity: '/Get/City'
}

// Events
// ADD


// GET

// Cities
router.get(`${EndpointMethod.GetAll}/Cities`, CityController.GetAllCities);

router.get(`${EndpointMethod.GetCity}/Id`, CityController.GetCityByID);
router.get(`${EndpointMethod.GetCity}/ZipCode`, CityController.GetCityByZip);
router.get(`${EndpointMethod.GetCity}/Name`, CityController.GetCityByName);

// POST
router.post(`${EndpointMethod.Add}/City`, CityController.AddCity);

// DELETE


export default router;