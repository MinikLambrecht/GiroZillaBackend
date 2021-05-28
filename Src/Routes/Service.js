/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - KundeID
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a product
 *         KundeID:
 *           type: integer
 *           description: Customer ID for the Customer tied to the service
 *         Dato:
 *           type: string
 *           description: Date of the service
 *         Antal Gange:
 *           type: integer
 *           description: Time Swept this year
 *         Aar:
 *           type: string
 *           description: Year of the service
 *         Betaling:
 *           type: string
 *           description: Paymnet form for the service
 *         Nummer:
 *           type: string
 *           description: Service number for the service
 *       example:
 *         ID: 250
 *         KundeID: 250
 *         Date: 2013-08-23
 *         Antal Gange: 34
 *         Aar: 2006
 *         Betaling: Girokort
 *         Nummer: 4j417ps13by84lil
 */

/**
 * @swagger
 *  tags:
 *    name: Services
 *    description: Endpoints to manage Services
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { ServiceController } from '../Controllers';

// Config
const serviceRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/Service:
 *   put:
 *     summary: Edit a Service
 *     tags: [Services]
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
 *                 example: 250
 *               CustomerID:
 *                 type: integer
 *                 example: 225
 *               Date:
 *                 type: string
 *                 example: 2016-02-11
 *               Year:
 *                 type: string
 *                 example: 2016
 *               PaymentForm:
 *                 type: string
 *                 example: Faktura
 *               InvoiceNumber:
 *                 type: string
 *                 example: 0k009lk79dy59mnr
 *               Paydate:
 *                 type: string
 *                 example: 2017-01-11
 *               TimesSwept:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: Service with id 250 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
serviceRouter.put(`${EndpointSubs.Put}/Service`, ServiceController.EditService);

// GET

/**
 * @swagger
 * /All/Services:
 *   get:
 *     summary: Returns All Services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Kunde ID":1,"Dato":"2015-05-10T22:00:00.000Z","Antal Gange":8,"Aar":2004,"Betaling":"Girokort","Nummer":"9h535zb81cq33cnc"},{"ID":2,"Kunde ID":2,"Dato":"1973-02-02T23:00:00.000Z","Antal Gange":23,"Aar":1992,"Betaling":"Girokort","Nummer":"2a454tx42rs30vue"},{"ID":3,"Kunde ID":3,"Dato":"1979-09-19T23:00:00.000Z","Antal Gange":5,"Aar":1980,"Betaling":"Girokort","Nummer":"8s359qg13ed29lrh"},{"ID":4,"Kunde ID":4,"Dato":"1984-06-15T22:00:00.000Z","Antal Gange":26546,"Aar":1983,"Betaling":"Girokort","Nummer":"5j491br61iv06kiv"},{"ID":5,"Kunde ID":5,"Dato":"2004-11-21T23:00:00.000Z","Antal Gange":0,"Aar":1983,"Betaling":"Faktura","Nummer":"5r349hv89ob48rqs"},{"ID":6,"Kunde ID":6,"Dato":"1987-08-09T22:00:00.000Z","Antal Gange":873,"Aar":2017,"Betaling":"Girokort","Nummer":"5n886he27da01qqm"},{"ID":7,"Kunde ID":7,"Dato":"2010-01-18T23:00:00.000Z","Antal Gange":977256,"Aar":1980,"Betaling":"Faktura","Nummer":"1a155wz11rb30tzi"},{"ID":8,"Kunde ID":8,"Dato":"2014-11-24T23:00:00.000Z","Antal Gange":6,"Aar":2005,"Betaling":"Girokort","Nummer":"1i540dl77zv58uda"},{"ID":9,"Kunde ID":9,"Dato":"1982-03-04T23:00:00.000Z","Antal Gange":652073,"Aar":1986,"Betaling":"Girokort","Nummer":"0g261io76ao37obv"},{"ID":10,"Kunde ID":10,"Dato":"1989-08-08T22:00:00.000Z","Antal Gange":848890580,"Aar":2011,"Betaling":"Faktura","Nummer":"2e626sd72tm84zrm"}]
 *       400:
 *         description: Bad Request.
 */
serviceRouter.get(`${EndpointSubs.GetAll}/Services`, ServiceController.GetAllServices);

/**
 * @swagger
 * /Get/Service/Id:
 *   get:
 *     summary: Return a Service by ID
 *     tags: [Services]
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
 *               $ref: '#/components/schemas/Service'
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
 *               Code: 405,
 *               Message: Method Not Allowed.
 */
serviceRouter.get(`${EndpointSubs.Get}/Service/Id`, ServiceController.GetServiceByID);

/**
 * @swagger
 * /Get/Service/CustomerID:
 *   get:
 *     summary: Return a Service by CustomerID
 *     tags: [Services]
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
 *               $ref: '#/components/schemas/Service'
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
 *               Code: 405,
 *               Message: Method Not Allowed.
 */
serviceRouter.get(`${EndpointSubs.Get}/Service/CustomerID`, ServiceController.GetServiceByCustomerID);

/**
 * @swagger
 * /Get/Service/PaymentForm:
 *   get:
 *     summary: Search Services by PaymentForm
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: PaymentForm
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":8,"Kunde ID":8,"Dato":"2014-11-24T23:00:00.000Z","Antal Gange":6,"Aar":2005,"Betaling":"Girokort","Nummer":"1i540dl77zv58uda"},{"ID":9,"Kunde ID":9,"Dato":"1982-03-04T23:00:00.000Z","Antal Gange":652073,"Aar":1986,"Betaling":"Girokort","Nummer":"0g261io76ao37obv"},{"ID":14,"Kunde ID":14,"Dato":"2020-12-14T23:00:00.000Z","Antal Gange":6,"Aar":2018,"Betaling":"Girokort","Nummer":"5g450ro13mh19qjp"},{"ID":15,"Kunde ID":15,"Dato":"1996-08-13T22:00:00.000Z","Antal Gange":60583955,"Aar":2005,"Betaling":"Girokort","Nummer":"7q296ct66wl14pzp"},{"ID":19,"Kunde ID":19,"Dato":"2007-06-25T22:00:00.000Z","Antal Gange":2907701,"Aar":1971,"Betaling":"Girokort","Nummer":"2f551gc70sr81lia"},{"ID":20,"Kunde ID":20,"Dato":"1991-06-02T22:00:00.000Z","Antal Gange":177,"Aar":1992,"Betaling":"Girokort","Nummer":"0i625it38mc56yin"},{"ID":24,"Kunde ID":24,"Dato":"1993-10-12T23:00:00.000Z","Antal Gange":58765,"Aar":1980,"Betaling":"Girokort","Nummer":"1l576ja96hu21mbj"},{"ID":28,"Kunde ID":28,"Dato":"1987-05-15T22:00:00.000Z","Antal Gange":61,"Aar":1978,"Betaling":"Girokort","Nummer":"5q036zb10us37lwa"},{"ID":31,"Kunde ID":31,"Dato":"2007-12-10T23:00:00.000Z","Antal Gange":40818,"Aar":2000,"Betaling":"Girokort","Nummer":"5u827gm59oi97osg"},{"ID":32,"Kunde ID":32,"Dato":"1996-05-09T22:00:00.000Z","Antal Gange":5369338,"Aar":2002,"Betaling":"Girokort","Nummer":"7i493ld45tt48rqv"}]
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
serviceRouter.get(`${EndpointSubs.Get}/Service/PaymentForm`, ServiceController.GetServiceByPaymentForm);

/**
 * @swagger
 * /Get/Service/InvoiceNumber:
 *   get:
 *     summary: Search Services by InvoiceNumber
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: InvoiceNumber
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":2,"Kunde ID":2,"Dato":"1973-02-02T23:00:00.000Z","Antal Gange":23,"Aar":1992,"Betaling":"Girokort","Nummer":"2a454tx42rs30vue"},{"ID":4,"Kunde ID":4,"Dato":"1984-06-15T22:00:00.000Z","Antal Gange":26546,"Aar":1983,"Betaling":"Girokort","Nummer":"5j491br61iv06kiv"},{"ID":6,"Kunde ID":6,"Dato":"1987-08-09T22:00:00.000Z","Antal Gange":873,"Aar":2017,"Betaling":"Girokort","Nummer":"5n886he27da01qqm"},{"ID":7,"Kunde ID":7,"Dato":"2010-01-18T23:00:00.000Z","Antal Gange":977256,"Aar":1980,"Betaling":"Faktura","Nummer":"1a155wz11rb30tzi"},{"ID":8,"Kunde ID":8,"Dato":"2014-11-24T23:00:00.000Z","Antal Gange":6,"Aar":2005,"Betaling":"Girokort","Nummer":"1i540dl77zv58uda"},{"ID":9,"Kunde ID":9,"Dato":"1982-03-04T23:00:00.000Z","Antal Gange":652073,"Aar":1986,"Betaling":"Girokort","Nummer":"0g261io76ao37obv"},{"ID":14,"Kunde ID":14,"Dato":"2020-12-14T23:00:00.000Z","Antal Gange":6,"Aar":2018,"Betaling":"Girokort","Nummer":"5g450ro13mh19qjp"},{"ID":16,"Kunde ID":16,"Dato":"1980-05-15T22:00:00.000Z","Antal Gange":8510161,"Aar":2010,"Betaling":"Faktura","Nummer":"7n631ht48kd01yth"},{"ID":17,"Kunde ID":17,"Dato":"2001-10-08T22:00:00.000Z","Antal Gange":438628237,"Aar":1981,"Betaling":"Faktura","Nummer":"0u284yf17wx34lbj"},{"ID":19,"Kunde ID":19,"Dato":"2007-06-25T22:00:00.000Z","Antal Gange":2907701,"Aar":1971,"Betaling":"Girokort","Nummer":"2f551gc70sr81lia"}]
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
serviceRouter.get(`${EndpointSubs.Get}/Service/InvoiceNumber`, ServiceController.GetServiceByInvoiceNumber);

/**
 * @swagger
 * /Get/Service/TimesSwept:
 *   get:
 *     summary: Search Services by TimesSwept
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: TimesSwept
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":5,"Kunde ID":5,"Dato":"2004-11-21T23:00:00.000Z","Antal Gange":0,"Aar":1983,"Betaling":"Faktura","Nummer":"5r349hv89ob48rqs"},{"ID":9,"Kunde ID":9,"Dato":"1982-03-04T23:00:00.000Z","Antal Gange":652073,"Aar":1986,"Betaling":"Girokort","Nummer":"0g261io76ao37obv"},{"ID":10,"Kunde ID":10,"Dato":"1989-08-08T22:00:00.000Z","Antal Gange":848890580,"Aar":2011,"Betaling":"Faktura","Nummer":"2e626sd72tm84zrm"},{"ID":11,"Kunde ID":11,"Dato":"1976-12-25T23:00:00.000Z","Antal Gange":5958730,"Aar":1997,"Betaling":"Faktura","Nummer":"1a128zk44qy93lfc"},{"ID":15,"Kunde ID":15,"Dato":"1996-08-13T22:00:00.000Z","Antal Gange":60583955,"Aar":2005,"Betaling":"Girokort","Nummer":"7q296ct66wl14pzp"},{"ID":16,"Kunde ID":16,"Dato":"1980-05-15T22:00:00.000Z","Antal Gange":8510161,"Aar":2010,"Betaling":"Faktura","Nummer":"7n631ht48kd01yth"},{"ID":19,"Kunde ID":19,"Dato":"2007-06-25T22:00:00.000Z","Antal Gange":2907701,"Aar":1971,"Betaling":"Girokort","Nummer":"2f551gc70sr81lia"},{"ID":22,"Kunde ID":22,"Dato":"2019-03-26T23:00:00.000Z","Antal Gange":31406,"Aar":1989,"Betaling":"Faktura","Nummer":"8c706jt97jz47rgn"},{"ID":25,"Kunde ID":25,"Dato":"1991-03-17T23:00:00.000Z","Antal Gange":68095908,"Aar":2021,"Betaling":"Faktura","Nummer":"9s434gt79rg25jlx"},{"ID":29,"Kunde ID":29,"Dato":"2021-04-01T22:00:00.000Z","Antal Gange":28290,"Aar":1988,"Betaling":"Faktura","Nummer":"2q617cd90ci85hoo"}]
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
 *               Code: 405,
 *               Message: Method Not Allowed.
 */
serviceRouter.get(`${EndpointSubs.Get}/Service/TimesSwept`, ServiceController.GetServiceByTimesSwept);

// POST

/**
 * @swagger
 * /Add/Service:
 *   post:
 *     summary: Add a Service
 *     tags: [Services]
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
 *                 example: 250
 *               CustomerID:
 *                 type: integer
 *                 example: 250
 *               Date:
 *                 type: string
 *                 example: 2013-08-23
 *               Year:
 *                 type: string
 *                 example: 2006
 *               PaymentForm:
 *                 type: string
 *                 example: Girokort
 *               InvoiceNumber:
 *                 type: string
 *                 example: 4j417ps13by84lil
 *               Paydate:
 *                 type: string
 *                 example: 2013-10-23
 *               TimesSwept:
 *                 type: integer
 *                 example: 34
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "New Service has been added"
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
serviceRouter.post(`${EndpointSubs.Add}/Service`, ServiceController.AddService);

// DELETE

/**
 * @swagger
 * /Remove/Service:
 *   delete:
 *     summary: Remove a Service by ID
 *     tags: [Services]
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
 *                 Message: OK, Service with id 250 has been removed
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
 *                 Code: 405,
 *                 Message: Method Not Allowed
 */
serviceRouter.delete(`${EndpointSubs.Delete}/Service`, ServiceController.RemoveService);

export {
    serviceRouter
}