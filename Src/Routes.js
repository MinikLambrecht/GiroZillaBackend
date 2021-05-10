// Import dependiencies
import { Router } from 'express';

// Controllers
import {
    CityController } from './Controllers';

const router = Router();

// Events
// ADD


// GET
router.get('/all/cities', CityController.GetAllCities);

// POST
router.post('/add/city', CityController.AddCity);

// DELETE


export default router;