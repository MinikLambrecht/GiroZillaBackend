/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - ZipCode
 *         - Name
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a city
 *         Zipcode:
 *           type: integer
 *           description: Zipcode of a city
 *         Name:
 *           type: string
 *           description: Name of a city
 *       example:
 *         Postnr: 5700
 *         By: Svendborg
 */

/**
 * @swagger
 *  tags:
 *    name: Cities
 *    description: Endpoints to manage Cities
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { CityController } from '../Controllers';

const cityRouter = Router();

const EndpointMethod = {
    GetAll: '/All',
    Add: '/Add',
    Get: '/Get',
    Put: '/Edit',
    Delete: '/Remove'
}


// PUT
/**
 * @swagger
 * /Edit/City:
 *   put:
 *     summary: Edit a City
 *     tags: [Cities]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                 - value
 *                 - zip
 *                 - city
 *             properties:
 *               value:
 *                 type: integer
 *                 example: 251 or 5700
 *               zip:
 *                 type: integer
 *                 example: 5700
 *               city:
 *                 type: string
 *                 example: Svendborg
 *             example:
 *               value: 251
 *               zip: 5799
 *               city: Svendborg
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: No Content. id or ZipCode was not found.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.put(`${EndpointMethod.Put}/City`, CityController.EditCity);


// GET
/**
 * @swagger
 * /All/Cities:
 *   get:
 *     summary: Returns all Cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: OK. Returns a list of Cities.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.get(`${EndpointMethod.GetAll}/Cities`, CityController.GetAllCities);

/**
 * @swagger
 * /Get/City/Id:
 *   get:
 *     summary: Return a City by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK. Return a City by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/City'
 *       204:
 *         description: No Content. The id was not found.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.get(`${EndpointMethod.Get}/City/Id`, CityController.GetCityByID);

/**
 * @swagger
 * /Get/City/ZipCode:
 *   get:
 *     summary: Return a City by ZipCode
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: zip
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK. Return a City by ZipCode
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/City'
 *       204:
 *         description: No Content. The ZipCode was not found.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.get(`${EndpointMethod.Get}/City/ZipCode`, CityController.GetCityByZip);

/**
 * @swagger
 * /Get/City/Name:
 *   get:
 *     summary: Return a City by Name
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK. Return a City by Name
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/City'
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.get(`${EndpointMethod.Get}/City/Name`, CityController.GetCityByName);

// POST
/**
 * @swagger
 * /Add/City:
 *   post:
 *     summary: Add a new City
 *     tags: [Cities]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - zip
 *               - city
 *             properties:
 *               zip:
 *                 type: integer
 *                 example: 5700
 *               city:
 *                 type: string
 *                 example: Svendborg
 *             example:
 *               zip: 5700
 *               city: Svendborg
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "City 'Svendborg' has been added with zipcode 5700"
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Method Not Allowed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Code: 405,
 *                 Message: Method Not Allowed, missing data in request.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.post(`${EndpointMethod.Add}/City`, CityController.AddCity);

// DELETE
/**
 * @swagger
 * /Remove/City:
 *   delete:
 *     summary: Remove a City by ID Or ZipCode
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: value
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: OK, City with id or Zipcode 251 has been removed
 *       204:
 *         description: No Content. id or ZipCode was not found.
 *       5XX:
 *         description: Unexpected error.
 */
cityRouter.delete(`${EndpointMethod.Delete}/City`, CityController.RemoveCity);

export {
    cityRouter
}