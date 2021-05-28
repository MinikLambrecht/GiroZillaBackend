/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - Postnr
 *         - By
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a city
 *         Postnr:
 *           type: integer
 *           description: Zipcode of a city
 *         By:
 *           type: string
 *           description: Name of a city
 *       example:
 *         ID: 251
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

// Config
const cityRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

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
 *                 - id
 *                 - ZipCode
 *                 - City
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 5700
 *               ZipCode:
 *                 type: integer
 *                 example: 5700
 *               City:
 *                 type: string
 *                 example: Svendborg
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: City with id or ZipCode 251 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
cityRouter.put(`${EndpointSubs.Put}/City`, CityController.EditCity);


// GET
/**
 * @swagger
 * /All/Cities:
 *   get:
 *     summary: Returns all Cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Postnr":96743,"By":"Tyresehaven"},{"ID":2,"Postnr":22563,"By":"Yolandaberg"},{"ID":3,"Postnr":36056,"By":"North Ritafurt"},{"ID":4,"Postnr":57470,"By":"Lake Emiliachester"},{"ID":5,"Postnr":5857,"By":"Melanymouth"},{"ID":6,"Postnr":1405,"By":"Lake Leda"},{"ID":7,"Postnr":76652,"By":"Prosaccomouth"},{"ID":8,"Postnr":1759,"By":"Lake Joaquin"},{"ID":9,"Postnr":30957,"By":"Port Mylene"},{"ID":10,"Postnr":93071,"By":"Reichelhaven"}]
 *       400:
 *         description: Bad Request.
 */
cityRouter.get(`${EndpointSubs.GetAll}/Cities`, CityController.GetAllCities);

/**
 * @swagger
 * /Get/City/id:
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
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/City'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Method Not Allowed.
 *         content:
 *           application/json:
 *             type: object
 *             example:
 *               Code: 405
 *               Message: Method Not Allowed.
 */
cityRouter.get(`${EndpointSubs.Get}/City/id`, CityController.GetCityByID);

/**
 * @swagger
 * /Get/City/ZipCode:
 *   get:
 *     summary: Search Cities by ZipCode
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: ZipCode
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":11,"Postnr":94918,"By":"South Isidrohaven"},{"ID":72,"Postnr":65943,"By":"Spinkaborough"},{"ID":91,"Postnr":89498,"By":"New Juniusside"},{"ID":97,"Postnr":18940,"By":"Steuberland"},{"ID":98,"Postnr":9394,"By":"Brakusberg"},{"ID":124,"Postnr":89481,"By":"North Axelhaven"},{"ID":146,"Postnr":94001,"By":"Friesenmouth"},{"ID":156,"Postnr":94719,"By":"South Abigaylestad"},{"ID":166,"Postnr":49463,"By":"Maeganville"},{"ID":192,"Postnr":88949,"By":"Jettieside"}]
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Method Not Allowed.
 *         content:
 *           application/json:
 *             type: object
 *             example:
 *               Code: 405
 *               Message: Method Not Allowed.
 */
cityRouter.get(`${EndpointSubs.Get}/City/ZipCode`, CityController.GetCityByZip);

/**
 * @swagger
 * /Get/City/City:
 *   get:
 *     summary: Search Cities by by Name
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: City
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":7,"Postnr":76652,"By":"Prosaccomouth"},{"ID":11,"Postnr":94918,"By":"South Isidrohaven"},{"ID":18,"Postnr":55104,"By":"North Jeromy"},{"ID":39,"Postnr":43105,"By":"Carolmouth"},{"ID":42,"Postnr":30216,"By":"West Grover"},{"ID":56,"Postnr":76555,"By":"Isidrobury"},{"ID":61,"Postnr":35030,"By":"Lakinborough"},{"ID":68,"Postnr":29878,"By":"North Rosemarie"},{"ID":72,"Postnr":65943,"By":"Spinkaborough"},{"ID":96,"Postnr":22641,"By":"New Robbie"}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
cityRouter.get(`${EndpointSubs.Get}/City/City`, CityController.GetCityByName);

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
 *               - ZipCode
 *               - City
 *             properties:
 *               ZipCode:
 *                 type: integer
 *                 example: 5700
 *               City:
 *                 type: string
 *                 example: Svendborg
 *             example:
 *               ZipCode: 5700
 *               City: Svendborg
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "City 'Svendborg' has been added with ZipCodecode 5700"
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Code: 405
 *                 Message: Method Not Allowed.
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Code: ER_DUP_ENTRY,
 *                 Number: 1062,
 *                 SqlState: 23000
 *                 Stack: Duplicate entry 'Svendborg' for key 'Cities_UN'\n    at Packet.asError (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/packets/packet.js:712:17)\n    at Query.execute (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/commands/command.js:28:26)\n    at PoolConnection.handlePacket (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/connection.js:425:32)\n    at PacketParser.onPacket (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/connection.js:75:12)\n    at PacketParser.executeStart (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/packet_parser.js:75:16)\n    at Socket.<anonymous> (/External/NextCloud/Projects/Programming/GiroZillaBackend/node_modules/mysql2/lib/connection.js:82:25)\n    at Socket.emit (events.js:314:20)\n    at Socket.EventEmitter.emit (domain.js:483:12)\n    at addChunk (_stream_readable.js:297:12)\n    at readableAddChunk (_stream_readable.js:272:9)
 */
cityRouter.post(`${EndpointSubs.Add}/City`, CityController.AddCity);

// DELETE
/**
 * @swagger
 * /Remove/City:
 *   delete:
 *     summary: Remove a City by ID or ZipCode
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: id
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
 *                 Message: OK, City with id 251 has been removed
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Method Not Allowed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Code: 405
 *                 Message: Method Not Allowed
 */
cityRouter.delete(`${EndpointSubs.Delete}/City`, CityController.RemoveCity);

export {
    cityRouter
}