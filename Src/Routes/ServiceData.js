/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceData:
 *       type: object
 *       required:
 *         - id
 *         - CustomerID
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a servicedata
 *         CustomerID:
 *           type: integer
 *           description: CustomerID of the Customer tied to the servicedata
 *         ServiceNumber:
 *           type: integer
 *           description: How many sweeps the customer need on a yearly basis
 *         Chimneys:
 *           type: integer
 *           description: How many chimneys the customer has to be cleaned
 *         Pipes:
 *           type: integer
 *           description: How many pipes the customer has in the chinmey(s)
 *         KW:
 *           type: string
 *           description: KW of the servicedata
 *         Lighting:
 *           type: string
 *           description: Lighting of the chimney(s) the customer has
 *         Height:
 *           type: integer
 *           description: Height of the chimney(s) the customer has
 *         Diameter:
 *           type: integer
 *           description: Diameter for each pipe in the chimney(s)
 *         Length:
 *           type: string
 *           description: Length og the pipes
 *         Type:
 *           type: string
 *           description: Type of chimney
 *       example:
 *         id: 90
 *         CustomerID: 90
 *         ServiceNumber: 1
 *         Chimneys: 3
 *         Pipes: 2
 *         KW: 91
 *         Lighting: 1 7 7
 *         Height: 12
 *         Diameter: 1
 *         Length: 7 8 4 5
 *         Type: 5 7 2 5
 */

/**
 * @swagger
 *  tags:
 *    name: ServiceData
 *    description: Endpoints to manage ServiceData
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { ServiceDataController } from '../Controllers';

// Config
const serviceDataRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/ServiceData:
 *   put:
 *     summary: Edit a ServiceData
 *     tags: [ServiceData]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - CustomerID
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 90
 *               CustomerID:
 *                 type: integer
 *                 example: 90
 *               ServiceNumber:
 *                 type: integer
 *                 example: 3
 *               Chimneys:
 *                 type: integer
 *                 example: 6
 *               Pipes:
 *                 type: integer
 *                 example: 12
 *               KW:
 *                 type: string
 *                 example: 55
 *               Lighting:
 *                 type: string
 *                 example: 7 7 1
 *               Height:
 *                 type: integer
 *                 example: 21
 *               Diameter:
 *                 type: integer
 *                 example: 36
 *               Length:
 *                 type: string
 *                 example: 5 4 8 7
 *               Type:
 *                 type: string
 *                 example: 5 2 7 5
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: ServiceData with id 90 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
serviceDataRouter.put(`${EndpointSubs.Put}/ServiceData`, ServiceDataController.EditServiceData);

// GET

/**
 * @swagger
 * /All/ServiceData:
 *   get:
 *     summary: Returns All ServiceData
 *     tags: [ServiceData]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"id":1,"CustomerID":1,"ServiceNumber":1,"Chimneys":1,"Pipes":4,"KW":"76","Lighting":"3 1 8","Height":34,"Diameter":7,"Length":"5 0 4 5","Type":"7 2 4 1"},{"id":2,"CustomerID":2,"ServiceNumber":2,"Chimneys":3,"Pipes":6,"KW":"49","Lighting":"4 8 6","Height":46,"Diameter":2,"Length":"6 6 8 5","Type":"5 8 1 4"},{"id":3,"CustomerID":3,"ServiceNumber":2,"Chimneys":1,"Pipes":3,"KW":"06","Lighting":"0 5 9","Height":20,"Diameter":9,"Length":"3 4 5 6","Type":"8 5 7 6"},{"id":4,"CustomerID":4,"ServiceNumber":1,"Chimneys":4,"Pipes":6,"KW":"89","Lighting":"8 6 6","Height":18,"Diameter":2,"Length":"8 4 5 6","Type":"9 3 0 7"},{"id":5,"CustomerID":5,"ServiceNumber":2,"Chimneys":1,"Pipes":8,"KW":"84","Lighting":"5 0 7","Height":7,"Diameter":5,"Length":"4 0 5 1","Type":"1 7 6 0"},{"id":6,"CustomerID":6,"ServiceNumber":2,"Chimneys":3,"Pipes":2,"KW":"73","Lighting":"9 1 4","Height":13,"Diameter":4,"Length":"8 2 8 0","Type":"1 1 1 1"},{"id":7,"CustomerID":7,"ServiceNumber":1,"Chimneys":3,"Pipes":4,"KW":"45","Lighting":"6 8 5","Height":6,"Diameter":4,"Length":"7 9 0 6","Type":"9 4 0 1"},{"id":8,"CustomerID":8,"ServiceNumber":1,"Chimneys":1,"Pipes":7,"KW":"77","Lighting":"3 1 5","Height":30,"Diameter":8,"Length":"0 2 8 6","Type":"6 6 4 6"},{"id":9,"CustomerID":9,"ServiceNumber":1,"Chimneys":1,"Pipes":7,"KW":"96","Lighting":"5 8 0","Height":7,"Diameter":5,"Length":"3 6 6 7","Type":"7 9 3 1"},{"id":10,"CustomerID":10,"ServiceNumber":2,"Chimneys":4,"Pipes":1,"KW":"43","Lighting":"3 7 9","Height":44,"Diameter":5,"Length":"8 4 9 7","Type":"3 4 2 9"}]
 *       400:
 *         description: Bad Request.
 */
serviceDataRouter.get(`${EndpointSubs.GetAll}/ServiceData`, ServiceDataController.GetAllServiceData);

/**
 * @swagger
 * /Get/ServiceData/id:
 *   get:
 *     summary: Return a ServiceData by ID
 *     tags: [ServiceData]
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
 *               $ref: '#/components/schemas/ServiceData'
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
serviceDataRouter.get(`${EndpointSubs.Get}/ServiceData/id`, ServiceDataController.GetServiceDataByID);

/**
 * @swagger
 * /Get/ServiceData/CustomerID:
 *   get:
 *     summary: Return a ServiceData by CustomerID
 *     tags: [ServiceData]
 *     parameters:
 *       - in: query
 *         name: CustomerID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ServiceData'
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
serviceDataRouter.get(`${EndpointSubs.Get}/ServiceData/CustomerID`, ServiceDataController.GetServiceDataByCustomerID);

// POST

/**
 * @swagger
 * /Add/ServiceData:
 *   post:
 *     summary: Add a ServiceData
 *     tags: [ServiceData]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - CustomerID
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 90
 *               CustomerID:
 *                 type: integer
 *                 example: 90
 *               ServiceNumber:
 *                 type: integer
 *                 example: 1
 *               Chimneys:
 *                 type: integer
 *                 example: 3
 *               Pipes:
 *                 type: integer
 *                 example: 2
 *               KW:
 *                 type: string
 *                 example: 91
 *               Lighting:
 *                 type: string
 *                 example: 1 7 7
 *               Height:
 *                 type: integer
 *                 example: 12
 *               Diameter:
 *                 type: integer
 *                 example: 1
 *               Length:
 *                 type: string
 *                 example: 7 8 4 5
 *               Type:
 *                 type: string
 *                 example: 5 7 2 5
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "New ServiceData has been added"
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
serviceDataRouter.post(`${EndpointSubs.Add}/ServiceData`, ServiceDataController.AddServiceData);

// DELETE

/**
 * @swagger
 * /Remove/ServiceData:
 *   delete:
 *     summary: Remove a ServiceData by ID
 *     tags: [ServiceData]
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
 *                 Message: OK, ServiceData with id 90 has been removed
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
serviceDataRouter.delete(`${EndpointSubs.Delete}/ServiceData`, ServiceDataController.RemoveServiceData);

export {
    serviceDataRouter
}