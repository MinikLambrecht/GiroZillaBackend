/**
 * @swagger
 * components:
 *   schemas:
 *     Route:
 *       type: object
 *       required:
 *         - Navn
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a route
 *         Navn:
 *           type: string
 *           description: Name of the route
 *         Beskrivelse:
 *           type: string
 *           description: Description of the route
 *         Maaned:
 *           type: string
 *           description: Month of the route
 *         Aar:
 *           type: string
 *           description: Year of the route
 *       example:
 *         ID: 250
 *         Navn: New Jalonmouth
 *         Beskrivelse: Ipsum et reiciendis perspiciatis necessitatibus in ut tempore. Rem rem unde mollitia odit beatae.
 *         Maaned: April
 *         Aar: 1996
 */

/**
 * @swagger
 *  tags:
 *    name: Routes
 *    description: Endpoints to manage Routes
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { RouteController } from '../Controllers';

// Config
const routeRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/Route:
 *   put:
 *     summary: Edit a Route
 *     tags: [Routes]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - Name
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 250
 *               Name:
 *                 type: string
 *                 example: Faarborg
 *               Description:
 *                 type: string
 *                 example: Aut et unde officiis impedit ut quae facere enim. Vitae corporis et ab odio. Eaque unde placeat accusantium nostrum excepturi voluptatem. Ut laborum officiis asperiores.
 *               Month:
 *                 type: string
 *                 example: Marts
 *               Year:
 *                 type: string
 *                 example: 2011
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: Route with id 250 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeRouter.put(`${EndpointSubs.Put}/Route`, RouteController.EditRoute);

// GET

/**
 * @swagger
 * /All/Routes:
 *   get:
 *     summary: Returns All Routes
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Navn":"East Emilyfort","Beskrivelse":"Ut magnam cupiditate quos ut velit. Quae commodi qui omnis. Distinctio magni rerum similique tempore dignissimos voluptatem aspernatur nihil. Iusto quia rem qui et voluptatum sapiente sequi.","Maaned":"November","Aar":1989},{"ID":2,"Navn":"North Khalidville","Beskrivelse":"","Maaned":"December","Aar":1973},{"ID":3,"Navn":"North Samanthaport","Beskrivelse":"","Maaned":"September","Aar":2008},{"ID":4,"Navn":"Jeaniehaven","Beskrivelse":"Sed omnis iste sapiente maiores quo. Cum dolorem ullam vel quam rerum nulla. A quis quos dolores aliquid voluptatem provident culpa.","Maaned":"January","Aar":2013},{"ID":5,"Navn":"North Janick","Beskrivelse":"Rerum vitae cumque ad nihil nisi. Maxime exercitationem id placeat rerum nihil. Placeat minus voluptatum et non culpa eligendi at odio.","Maaned":"August","Aar":1989},{"ID":6,"Navn":"Kesslershire","Beskrivelse":"","Maaned":"August","Aar":1971},{"ID":7,"Navn":"Mikaylabury","Beskrivelse":"Consequatur blanditiis qui quia quos. Ipsa minus illo quaerat sit consequuntur repellat expedita ducimus. At consequuntur nostrum maiores sunt accusamus quae. Deserunt vel esse ratione.","Maaned":"June","Aar":2018},{"ID":8,"Navn":"Amytown","Beskrivelse":"","Maaned":"June","Aar":1984},{"ID":9,"Navn":"West Cassiehaven","Beskrivelse":"Expedita repellat debitis non velit iste. Autem excepturi et deleniti dolores. Molestiae corrupti aliquam quia voluptates. Laboriosam molestias natus cum eos quia.","Maaned":"October","Aar":1973},{"ID":10,"Navn":"Port Vincenzaberg","Beskrivelse":"","Maaned":"August","Aar":2019}]
 *       400:
 *         description: Bad Request.
 */
routeRouter.get(`${EndpointSubs.GetAll}/Routes`, RouteController.GetAllRoutes);

/**
 * @swagger
 * /Get/Route/Id:
 *   get:
 *     summary: Return a Route by ID
 *     tags: [Routes]
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
 *               $ref: '#/components/schemas/Route'
 *       204:
 *         description: No Content.
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
routeRouter.get(`${EndpointSubs.Get}/Route/Id`, RouteController.GetRouteByID);

/**
 * @swagger
 * /Get/Route/Name:
 *   get:
 *     summary: Search Routes by Name
 *     tags: [Routes]
 *     parameters:
 *       - in: query
 *         name: Name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":4,"Navn":"Jeaniehaven","Beskrivelse":"Sed omnis iste sapiente maiores quo. Cum dolorem ullam vel quam rerum nulla. A quis quos dolores aliquid voluptatem provident culpa.","Maaned":"January","Aar":2013},{"ID":5,"Navn":"North Janick","Beskrivelse":"Rerum vitae cumque ad nihil nisi. Maxime exercitationem id placeat rerum nihil. Placeat minus voluptatum et non culpa eligendi at odio.","Maaned":"August","Aar":1989},{"ID":31,"Navn":"East Johathan","Beskrivelse":"","Maaned":"July","Aar":2014},{"ID":39,"Navn":"Port Jeniferside","Beskrivelse":"In facilis corrupti sint fuga quia ab odio. Libero cupiditate odit quod vel.","Maaned":"April","Aar":1986},{"ID":43,"Navn":"Jesseton","Beskrivelse":"Consequuntur blanditiis eos ut aut at. Recusandae dolorem dolorem dolor quae. Cum ea unde quibusdam deleniti qui eaque.\nEt quia nam adipisci ratione. Et minima natus qui quia qui.","Maaned":"January","Aar":1987},{"ID":62,"Navn":"Port Jana","Beskrivelse":"","Maaned":"January","Aar":2020},{"ID":74,"Navn":"West Jovaniport","Beskrivelse":"","Maaned":"November","Aar":2009},{"ID":111,"Navn":"Jacobsonport","Beskrivelse":"","Maaned":"March","Aar":1985},{"ID":118,"Navn":"New Janellestad","Beskrivelse":"","Maaned":"March","Aar":2020},{"ID":131,"Navn":"West Jessica","Beskrivelse":"","Maaned":"October","Aar":1971}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 *       403:
 *         description: Forbidden.
 *         content:
 *           application/json:
 *             type: object
 *             example:
 *               Code: 405,
 *               Message: Forbidden
 */
routeRouter.get(`${EndpointSubs.Get}/Route/Name`, RouteController.GetRouteByName);

// POST

/**
 * @swagger
 * /Add/Route:
 *   post:
 *     summary: Add a Route
 *     tags: [Routes]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - Name
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 250
 *               Name:
 *                 type: string
 *                 example: New Jalonmouth
 *               Description:
 *                 type: string
 *                 example: Ipsum et reiciendis perspiciatis necessitatibus in ut tempore. Rem rem unde mollitia odit beatae.
 *               Month:
 *                 type: string
 *                 example: April
 *               Year:
 *                 type: string
 *                 example: 1996
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "Route New Jalonmouth has been added"
 *       400:
 *         description: Bad Request.
 *       405:
 *         description: Method Not Allowed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Code: 405,
 *                 Message: Method Not Allowed
 */
routeRouter.post(`${EndpointSubs.Add}/Route`, RouteController.AddRoute);

// DELETE

/**
 * @swagger
 * /Remove/Route:
 *   delete:
 *     summary: Remove a Route by ID
 *     tags: [Routes]
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
 *                 Message: OK, Route with id 250 has been removed
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeRouter.delete(`${EndpointSubs.Delete}/Route`, RouteController.RemoveRoute);

export {
    routeRouter
}