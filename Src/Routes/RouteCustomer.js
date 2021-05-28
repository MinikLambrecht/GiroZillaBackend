/**
 * @swagger
 * components:
 *   schemas:
 *     RouteCustomer:
 *       type: object
 *       required:
 *         - ID
 *         - Fornavn
 *         - Efternavn
 *         - Adresse
 *         - Postnr
 *         - By
 *         - Email
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a routecustomer
 *         Rute ID:
 *           type: integer
 *           description: Route ID for the route tied to the routecustomer
 *         Kunde ID:
 *           type: integer
 *           description: Customer ID for the Customer tied to the routecustomer
 *         Adresse:
 *           type: string
 *           description: Address of a customer
 *         Postnr:
 *           type: integer
 *           description: Zipcode of a customer
 *         By:
 *           type: integer
 *           description: City of a customer
 *         Fornavn:
 *           type: string
 *           description: Firstname of a customer
 *         Efternavn:
 *           type: string
 *           description: Lastname of a customer
 *         Email:
 *           type: string
 *           description: E-mail address of a customer
 *         Mobil:
 *           type: string
 *           description: Optional mobile phone number of a customer
 *         Hjemme:
 *           type: string
 *           description: Optional home phone number of a customer
 *         Kommentar:
 *           type: string
 *           description: Optional comment for a customer
 *         Fejninger:
 *           type: integer
 *           description: Services needed for a customer
 *       example:
 *         ID: 200
 *         Rute ID: 200
 *         Kunde ID: 200 
 *         Adresse: 6052 Krista Walk Apt. 934 Aufderharberg, ME 2
 *         Postnr: 77206
 *         By: East Rylanmouth
 *         Fornavn: Cordelia
 *         Efternavn: Abshire
 *         Email: claud33@gmail.com
 *         Mobil: 494.467.4476x233
 *         Hjemme: (406)288-5112
 *         Kommentar: Quasi eligendi suscipit incidunt occaecati do
 *         Fejninger: 6
 */

/**
 * @swagger
 *  tags:
 *    name: RouteCustomers
 *    description: Endpoints to manage RouteCustomers
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { RouteCustomerController } from '../Controllers';

// Config
const routeCustomerRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/RouteCustomer:
 *   put:
 *     summary: Edit a RouteCustomer
 *     tags: [RouteCustomers]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - RouteID
 *               - CustomerID
 *               - CityID
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 200
 *               RouteID:
 *                 type: string
 *                 example: 199
 *               CustomerID:
 *                 type: string
 *                 example: 199
 *               CityID:
 *                 type: string
 *                 example: 199
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: RouteCustomer with id 200 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.put(`${EndpointSubs.Put}/RouteCustomer`, RouteCustomerController.EditRouteCustomer);

// GET

/**
 * @swagger
 * /All/RouteCustomers:
 *   get:
 *     summary: Returns All RouteCustomers
 *     tags: [RouteCustomers]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Rute ID":1,"Kunde ID":1,"Adresse":"5314 Caden Curve\nNew Aylin, ME 77501","Postnr":96743,"By":"Tyresehaven","Fornavn":"Rey","Efternavn":"Corwin","Email":"millie.o'reilly@gmail.com","Mobil":"","Hjemme":"","Kommentar":"Dolor praesentium aut sint suscipit. Pariatur","Fejninger":8},{"ID":2,"Rute ID":2,"Kunde ID":2,"Adresse":"134 Brendon Ridges\nMonahanbury, NH 71549-7190","Postnr":22563,"By":"Yolandaberg","Fornavn":"Laila","Efternavn":"Hayes","Email":"orn.reagan@gmail.com","Mobil":"930.695.9397x78622","Hjemme":"","Kommentar":"Qui est dolores optio voluptas. Temporibus co","Fejninger":5},{"ID":3,"Rute ID":3,"Kunde ID":3,"Adresse":"4580 Crona Prairie\nJuniusburgh, IA 69050-8311","Postnr":36056,"By":"North Ritafurt","Fornavn":"Connor","Efternavn":"Braun","Email":"ygottlieb@gmail.com","Mobil":"","Hjemme":"(558)929-1386x2843","Kommentar":"Ab facere odio non sit eum rerum. Incidunt to","Fejninger":8},{"ID":4,"Rute ID":4,"Kunde ID":4,"Adresse":"8741 Reilly Common Apt. 304\nNew Darrickshire,","Postnr":57470,"By":"Lake Emiliachester","Fornavn":"Mckenna","Efternavn":"Nienow","Email":"huel.nasir@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":6},{"ID":5,"Rute ID":5,"Kunde ID":5,"Adresse":"59993 Oren Run Apt. 549\nEast Loy, NH 79684","Postnr":5857,"By":"Melanymouth","Fornavn":"Courtney","Efternavn":"Ondricka","Email":"bwillms@yahoo.com","Mobil":"","Hjemme":"539-264-0996x6423","Kommentar":"Et officiis adipisci non ipsam non aut. Repud","Fejninger":3},{"ID":6,"Rute ID":6,"Kunde ID":6,"Adresse":"09384 Etha Dale\nWest Bernita, NM 85456-2824","Postnr":1405,"By":"Lake Leda","Fornavn":"Abigale","Efternavn":"Harber","Email":"cora05@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":9},{"ID":7,"Rute ID":7,"Kunde ID":7,"Adresse":"17128 Danika Mission Suite 556\nKaydenborough,","Postnr":76652,"By":"Prosaccomouth","Fornavn":"Kenyatta","Efternavn":"Dach","Email":"chalvorson@hotmail.com","Mobil":"221.881.7701","Hjemme":"246-734-7935x86875","Kommentar":"Eos voluptas voluptatem doloribus officia. Qu","Fejninger":6},{"ID":8,"Rute ID":8,"Kunde ID":8,"Adresse":"7992 Hoppe Ridge\nElmermouth, OH 07357-7995","Postnr":1759,"By":"Lake Joaquin","Fornavn":"Giovanna","Efternavn":"Stokes","Email":"richard85@gmail.com","Mobil":"970.501.5065","Hjemme":"","Kommentar":"Est hic itaque quia velit. Omnis ratione volu","Fejninger":4},{"ID":9,"Rute ID":9,"Kunde ID":9,"Adresse":"1680 Liam Islands\nEast Willyborough, AR 13237","Postnr":30957,"By":"Port Mylene","Fornavn":"Delores","Efternavn":"Metz","Email":"leola.hagenes@yahoo.com","Mobil":"","Hjemme":"047-403-0612x2162","Kommentar":"Animi aut officia et maiores. Voluptas quis v","Fejninger":7},{"ID":10,"Rute ID":10,"Kunde ID":10,"Adresse":"8016 Tillman Roads\nPort Jermain, MD 46021","Postnr":93071,"By":"Reichelhaven","Fornavn":"Jan","Efternavn":"Kuhlman","Email":"cassin.howard@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":5}]
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.get(`${EndpointSubs.GetAll}/RouteCustomers`, RouteCustomerController.GetAllRouteCustomers);

/**
 * @swagger
 * /Get/RouteCustomer/id:
 *   get:
 *     summary: Return a RouteCustomer by ID
 *     tags: [RouteCustomers]
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
 *               $ref: '#/components/schemas/RouteCustomer'
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
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/id`, RouteCustomerController.GetRouteCustomerByID);

/**
 * @swagger
 * /Get/RouteCustomer/RouteID:
 *   get:
 *     summary: Return a RouteCustomer by RouteID
 *     tags: [RouteCustomers]
 *     parameters:
 *       - in: query
 *         name: RouteID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/RouteCustomer'
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
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/RouteID`, RouteCustomerController.GetRouteCustomerByRouteID);

/**
 * @swagger
 * /Get/RouteCustomer/CustomerID:
 *   get:
 *     summary: Return a RouteCustomer by CustomerID
 *     tags: [RouteCustomers]
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
 *               $ref: '#/components/schemas/RouteCustomer'
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
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/CustomerID`, RouteCustomerController.GetRouteCustomerByCustomerID);

/**
 * @swagger
 * /Get/RouteCustomer/FirstName:
 *   get:
 *     summary: Search RouteCustomers by FirstName
 *     tags: [RouteCustomers]
 *     parameters:
 *       - in: query
 *         name: FirstName
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":24,"Rute ID":24,"Kunde ID":24,"Adresse":"14573 Effertz Bridge\nWindlerport, TN 95711","Postnr":57049,"By":"West Lou","Fornavn":"Amara","Efternavn":"Boyle","Email":"eugenia24@yahoo.com","Mobil":"","Hjemme":"925-703-1715x82479","Kommentar":"","Fejninger":0},{"ID":90,"Rute ID":90,"Kunde ID":90,"Adresse":"181 Dominic Isle Suite 979\nDooleychester, IN ","Postnr":83303,"By":"Eveview","Fornavn":"Jamarcus","Efternavn":"Abbott","Email":"clemens68@yahoo.com","Mobil":"1-680-045-3679","Hjemme":"","Kommentar":"","Fejninger":7},{"ID":107,"Rute ID":107,"Kunde ID":107,"Adresse":"767 Collin Forest Apt. 906\nWest Addietown, TN","Postnr":25198,"By":"Windlerview","Fornavn":"Amari","Efternavn":"Kautzer","Email":"ruben07@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"Excepturi sed necessitatibus sequi corporis a","Fejninger":3},{"ID":122,"Rute ID":122,"Kunde ID":122,"Adresse":"125 Ed Isle Suite 494\nNew Dudley, MN 22793","Postnr":46498,"By":"Keeganshire","Fornavn":"Kamryn","Efternavn":"Fay","Email":"nsipes@yahoo.com","Mobil":"","Hjemme":"057.137.9590","Kommentar":"","Fejninger":4},{"ID":130,"Rute ID":130,"Kunde ID":130,"Adresse":"5118 Fritsch Village Suite 149\nStantonberg, V","Postnr":62739,"By":"Bergnaumhaven","Fornavn":"Ramona","Efternavn":"Gleason","Email":"gblick@yahoo.com","Mobil":"1-384-421-8584x289","Hjemme":"056.528.0629","Kommentar":"Facilis quidem dignissimos rerum veritatis. C","Fejninger":2},{"ID":166,"Rute ID":166,"Kunde ID":166,"Adresse":"8279 Bernhard Park\nEmmatown, MN 43142-6569","Postnr":49463,"By":"Maeganville","Fornavn":"Jamir","Efternavn":"Trantow","Email":"rossie18@gmail.com","Mobil":"(085)779-7512","Hjemme":"","Kommentar":"Necessitatibus hic nesciunt illo nostrum magn","Fejninger":6},{"ID":191,"Rute ID":191,"Kunde ID":191,"Adresse":"8281 Goyette Islands Apt. 869\nWest Dixiebury,","Postnr":81637,"By":"West Casimer","Fornavn":"Myriam","Efternavn":"Ortiz","Email":"fatima.koch@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":0},{"ID":209,"Rute ID":209,"Kunde ID":209,"Adresse":"381 Lind Villages Suite 131\nOrvilleside, VA 1","Postnr":26323,"By":"Addiebury","Fornavn":"Amira","Efternavn":"Breitenberg","Email":"ndoyle@yahoo.com","Mobil":"+84(9)2890857378","Hjemme":"(110)925-8068x989","Kommentar":"","Fejninger":1},{"ID":227,"Rute ID":227,"Kunde ID":227,"Adresse":"0953 Ethelyn Throughway Suite 541\nHipolitobur","Postnr":23910,"By":"Boyleborough","Fornavn":"Jamir","Efternavn":"Kessler","Email":"pcrooks@yahoo.com","Mobil":"1-774-804-7346","Hjemme":"1-817-748-7328","Kommentar":"","Fejninger":3},{"ID":232,"Rute ID":232,"Kunde ID":232,"Adresse":"0027 Haley Overpass\nNew Graciela, NV 72308-92","Postnr":22750,"By":"Spencerburgh","Fornavn":"Amalia","Efternavn":"Anderson","Email":"hgreen@hotmail.com","Mobil":"521-853-7808","Hjemme":"(580)419-4355","Kommentar":"Temporibus necessitatibus doloribus optio vol","Fejninger":1}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/FirstName`, RouteCustomerController.GetRouteCustomerByFirstName);

/**
 * @swagger
 * /Get/RouteCustomer/LastName:
 *   get:
 *     summary: Search RouteCustomers by LastName
 *     tags: [RouteCustomers]
 *     parameters:
 *       - in: query
 *         name: LastName
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Rute ID":1,"Kunde ID":1,"Adresse":"5314 Caden Curve\nNew Aylin, ME 77501","Postnr":96743,"By":"Tyresehaven","Fornavn":"Rey","Efternavn":"Corwin","Email":"millie.o'reilly@gmail.com","Mobil":"","Hjemme":"","Kommentar":"Dolor praesentium aut sint suscipit. Pariatur","Fejninger":8},{"ID":4,"Rute ID":4,"Kunde ID":4,"Adresse":"8741 Reilly Common Apt. 304\nNew Darrickshire,","Postnr":57470,"By":"Lake Emiliachester","Fornavn":"Mckenna","Efternavn":"Nienow","Email":"huel.nasir@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":6},{"ID":13,"Rute ID":13,"Kunde ID":13,"Adresse":"35722 Cloyd Curve Suite 824\nLake Garrison, ID","Postnr":15159,"By":"Lake Ezrashire","Fornavn":"Norval","Efternavn":"Witting","Email":"claudie.bruen@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"Aut unde id accusamus praesentium sunt reicie","Fejninger":7},{"ID":37,"Rute ID":37,"Kunde ID":37,"Adresse":"5513 Mitchell Lake\nRiceview, WI 47685-0738","Postnr":66999,"By":"Doyleside","Fornavn":"Emmanuel","Efternavn":"Wyman","Email":"valentine.ziemann@gmail.com","Mobil":"1-491-188-5700x385","Hjemme":"1-027-471-1393x124","Kommentar":"Deserunt dolorem porro voluptatem officia vol","Fejninger":3},{"ID":42,"Rute ID":42,"Kunde ID":42,"Adresse":"57307 Myrtis Loaf\nSigmundstad, UT 28575-7560","Postnr":30216,"By":"West Grover","Fornavn":"Lexie","Efternavn":"Lueilwitz","Email":"paul.lebsack@yahoo.com","Mobil":"","Hjemme":"(253)613-7510x3709","Kommentar":"","Fejninger":1},{"ID":47,"Rute ID":47,"Kunde ID":47,"Adresse":"4571 Priscilla Dam Apt. 922\nNorth Pearline, O","Postnr":92362,"By":"East Isabelle","Fornavn":"Birdie","Efternavn":"Wolff","Email":"shayna.auer@gmail.com","Mobil":"787.477.2526x53100","Hjemme":"","Kommentar":"","Fejninger":4},{"ID":48,"Rute ID":48,"Kunde ID":48,"Adresse":"458 Joanny Grove Suite 895\nLake Herta, CO 977","Postnr":67593,"By":"Port Myrnamouth","Fornavn":"Joaquin","Efternavn":"Rowe","Email":"estanton@hotmail.com","Mobil":"+17(6)5044352197","Hjemme":"","Kommentar":"Et harum assumenda quos id ducimus. Ut non vo","Fejninger":3},{"ID":49,"Rute ID":49,"Kunde ID":49,"Adresse":"6570 Diamond Lodge Suite 262\nSalvatoreport, N","Postnr":36757,"By":"Rippinton","Fornavn":"Ervin","Efternavn":"Nienow","Email":"bella21@gmail.com","Mobil":"","Hjemme":"(239)747-4359","Kommentar":"Animi est praesentium nesciunt excepturi. Tem","Fejninger":6},{"ID":50,"Rute ID":50,"Kunde ID":50,"Adresse":"706 Doyle Crescent\nAlberthatown, ND 54369","Postnr":32548,"By":"Aufderhartown","Fornavn":"Aletha","Efternavn":"Lubowitz","Email":"kathleen.armstrong@hotmail.com","Mobil":"","Hjemme":"(734)105-5866x35137","Kommentar":"Dolorem reprehenderit odit est molestiae non ","Fejninger":2},{"ID":60,"Rute ID":60,"Kunde ID":60,"Adresse":"5371 Xavier Plains\nPort Barrettmouth, WV 1240","Postnr":73548,"By":"Ashtonland","Fornavn":"Pauline","Efternavn":"Lueilwitz","Email":"oberbrunner.nicklaus@hotmail.com","Mobil":"1-280-346-0164x08843","Hjemme":"","Kommentar":"Inventore asperiores delectus qui. Est sed ea","Fejninger":0}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/LastName`, RouteCustomerController.GetRouteCustomerByLastName);

/**
 * @swagger
 * /Get/RouteCustomer/Address:
 *   get:
 *     summary: Search RouteCustomers by Address
 *     tags: [RouteCustomers]
 *     parameters:
 *       - in: query
 *         name: Address
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":2,"Rute ID":2,"Kunde ID":2,"Adresse":"134 Brendon Ridges\nMonahanbury, NH 71549-7190","Postnr":22563,"By":"Yolandaberg","Fornavn":"Laila","Efternavn":"Hayes","Email":"orn.reagan@gmail.com","Mobil":"930.695.9397x78622","Hjemme":"","Kommentar":"Qui est dolores optio voluptas. Temporibus co","Fejninger":5},{"ID":3,"Rute ID":3,"Kunde ID":3,"Adresse":"4580 Crona Prairie\nJuniusburgh, IA 69050-8311","Postnr":36056,"By":"North Ritafurt","Fornavn":"Connor","Efternavn":"Braun","Email":"ygottlieb@gmail.com","Mobil":"","Hjemme":"(558)929-1386x2843","Kommentar":"Ab facere odio non sit eum rerum. Incidunt to","Fejninger":8},{"ID":5,"Rute ID":5,"Kunde ID":5,"Adresse":"59993 Oren Run Apt. 549\nEast Loy, NH 79684","Postnr":5857,"By":"Melanymouth","Fornavn":"Courtney","Efternavn":"Ondricka","Email":"bwillms@yahoo.com","Mobil":"","Hjemme":"539-264-0996x6423","Kommentar":"Et officiis adipisci non ipsam non aut. Repud","Fejninger":3},{"ID":6,"Rute ID":6,"Kunde ID":6,"Adresse":"09384 Etha Dale\nWest Bernita, NM 85456-2824","Postnr":1405,"By":"Lake Leda","Fornavn":"Abigale","Efternavn":"Harber","Email":"cora05@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":9},{"ID":8,"Rute ID":8,"Kunde ID":8,"Adresse":"7992 Hoppe Ridge\nElmermouth, OH 07357-7995","Postnr":1759,"By":"Lake Joaquin","Fornavn":"Giovanna","Efternavn":"Stokes","Email":"richard85@gmail.com","Mobil":"970.501.5065","Hjemme":"","Kommentar":"Est hic itaque quia velit. Omnis ratione volu","Fejninger":4},{"ID":14,"Rute ID":14,"Kunde ID":14,"Adresse":"782 Otto Drives\nLake Jacky, WA 67377-8629","Postnr":51753,"By":"Nasirburgh","Fornavn":"Elda","Efternavn":"Schmitt","Email":"nitzsche.josephine@yahoo.com","Mobil":"1-641-253-4353","Hjemme":"","Kommentar":"","Fejninger":1},{"ID":15,"Rute ID":15,"Kunde ID":15,"Adresse":"15933 Dickinson Creek\nGersonport, RI 50499-59","Postnr":12292,"By":"Port Halie","Fornavn":"Jany","Efternavn":"Purdy","Email":"borer.alexanne@gmail.com","Mobil":"","Hjemme":"160.759.8972","Kommentar":"Recusandae dignissimos architecto quaerat tem","Fejninger":3},{"ID":16,"Rute ID":16,"Kunde ID":16,"Adresse":"9327 Bauch Plaza\nLake Kaleb, NE 31411","Postnr":85590,"By":"New Berniecehaven","Fornavn":"Darrell","Efternavn":"Boyle","Email":"schneider.karianne@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"Beatae et ea non et eligendi magnam aperiam. ","Fejninger":3},{"ID":19,"Rute ID":19,"Kunde ID":19,"Adresse":"940 Pagac Ramp\nCummingsport, RI 32898","Postnr":90036,"By":"North Ivy","Fornavn":"Ava","Efternavn":"Koss","Email":"kari.mohr@yahoo.com","Mobil":"","Hjemme":"+08(8)8725661341","Kommentar":"","Fejninger":7},{"ID":20,"Rute ID":20,"Kunde ID":20,"Adresse":"13281 Eliane Field\nLaurianneview, MN 03967","Postnr":36844,"By":"Hahnfurt","Fornavn":"Kenna","Efternavn":"Cole","Email":"osborne.lang@yahoo.com","Mobil":"","Hjemme":"+07(9)9502392583","Kommentar":"Laudantium possimus aut consequatur sunt ea d","Fejninger":5}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/Address`, RouteCustomerController.GetRouteCustomerByAddress);

/**
 * @swagger
 * /Get/RouteCustomer/City:
 *   get:
 *     summary: Search RouteCustomers by City
 *     tags: [RouteCustomers]
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
 *               example: [{"ID":2,"Rute ID":2,"Kunde ID":2,"Adresse":"134 Brendon Ridges\nMonahanbury, NH 71549-7190","Postnr":22563,"By":"Yolandaberg","Fornavn":"Laila","Efternavn":"Hayes","Email":"orn.reagan@gmail.com","Mobil":"930.695.9397x78622","Hjemme":"","Kommentar":"Qui est dolores optio voluptas. Temporibus co","Fejninger":5},{"ID":12,"Rute ID":12,"Kunde ID":12,"Adresse":"5320 Dickinson Ranch Suite 451\nDarenland, KY ","Postnr":20084,"By":"New Bradford","Fornavn":"Lukas","Efternavn":"Rice","Email":"mathew.mills@gmail.com","Mobil":"355.421.5592x51560","Hjemme":"03573400835","Kommentar":"","Fejninger":7},{"ID":14,"Rute ID":14,"Kunde ID":14,"Adresse":"782 Otto Drives\nLake Jacky, WA 67377-8629","Postnr":51753,"By":"Nasirburgh","Fornavn":"Elda","Efternavn":"Schmitt","Email":"nitzsche.josephine@yahoo.com","Mobil":"1-641-253-4353","Hjemme":"","Kommentar":"","Fejninger":1},{"ID":16,"Rute ID":16,"Kunde ID":16,"Adresse":"9327 Bauch Plaza\nLake Kaleb, NE 31411","Postnr":85590,"By":"New Berniecehaven","Fornavn":"Darrell","Efternavn":"Boyle","Email":"schneider.karianne@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"Beatae et ea non et eligendi magnam aperiam. ","Fejninger":3},{"ID":23,"Rute ID":23,"Kunde ID":23,"Adresse":"58380 Carol Turnpike\nPort Tomborough, HI 8639","Postnr":25052,"By":"Dibberthaven","Fornavn":"Madison","Efternavn":"Green","Email":"fhirthe@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"Odit enim repellendus pariatur corrupti rem n","Fejninger":9},{"ID":26,"Rute ID":26,"Kunde ID":26,"Adresse":"7443 Perry Harbors\nPort Braden, AR 64845","Postnr":48702,"By":"Cletusberg","Fornavn":"Rubie","Efternavn":"Eichmann","Email":"kfranecki@gmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":4},{"ID":27,"Rute ID":27,"Kunde ID":27,"Adresse":"067 Fadel Place\nLake Stefanbury, GA 74986-336","Postnr":31643,"By":"Lake Aniyaberg","Fornavn":"Jeremie","Efternavn":"Schulist","Email":"wmraz@hotmail.com","Mobil":"163-509-6963x83067","Hjemme":"","Kommentar":"","Fejninger":1},{"ID":41,"Rute ID":41,"Kunde ID":41,"Adresse":"719 Haylie Ports\nBernhardtown, AZ 18195-9076","Postnr":85186,"By":"South Billland","Fornavn":"Cielo","Efternavn":"Feil","Email":"leonardo.runolfsdottir@yahoo.com","Mobil":"","Hjemme":"+34(9)9659292349","Kommentar":"","Fejninger":8},{"ID":47,"Rute ID":47,"Kunde ID":47,"Adresse":"4571 Priscilla Dam Apt. 922\nNorth Pearline, O","Postnr":92362,"By":"East Isabelle","Fornavn":"Birdie","Efternavn":"Wolff","Email":"shayna.auer@gmail.com","Mobil":"787.477.2526x53100","Hjemme":"","Kommentar":"","Fejninger":4},{"ID":52,"Rute ID":52,"Kunde ID":52,"Adresse":"100 Granville Mountain\nJackelinebury, MN 6696","Postnr":99311,"By":"South Bradview","Fornavn":"Johathan","Efternavn":"Maggio","Email":"satterfield.annamae@hotmail.com","Mobil":"","Hjemme":"703-891-0926x634","Kommentar":"Repellendus aut harum qui. Sunt eaque dicta e","Fejninger":1}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/City`, RouteCustomerController.GetRouteCustomerByCity);

/**
 * @swagger
 * /Get/RouteCustomer/ZipCode:
 *   get:
 *     summary: Search RouteCustomers by ZipCode
 *     tags: [RouteCustomers]
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
 *               example: [{"ID":27,"Rute ID":27,"Kunde ID":27,"Adresse":"067 Fadel Place\nLake Stefanbury, GA 74986-336","Postnr":31643,"By":"Lake Aniyaberg","Fornavn":"Jeremie","Efternavn":"Schulist","Email":"wmraz@hotmail.com","Mobil":"163-509-6963x83067","Hjemme":"","Kommentar":"","Fejninger":1},{"ID":34,"Rute ID":34,"Kunde ID":34,"Adresse":"53220 Kattie Estate Suite 271\nVandervorttown,","Postnr":71666,"By":"Lake Lyrictown","Fornavn":"Myron","Efternavn":"Lynch","Email":"ohyatt@hotmail.com","Mobil":"","Hjemme":"072.046.5829x121","Kommentar":"Quia quisquam aut quasi est cumque tempora ha","Fejninger":8},{"ID":42,"Rute ID":42,"Kunde ID":42,"Adresse":"57307 Myrtis Loaf\nSigmundstad, UT 28575-7560","Postnr":30216,"By":"West Grover","Fornavn":"Lexie","Efternavn":"Lueilwitz","Email":"paul.lebsack@yahoo.com","Mobil":"","Hjemme":"(253)613-7510x3709","Kommentar":"","Fejninger":1},{"ID":64,"Rute ID":64,"Kunde ID":64,"Adresse":"1277 Johnston Branch\nNew Devonside, WV 70649","Postnr":31627,"By":"East Keith","Fornavn":"Dovie","Efternavn":"Auer","Email":"jacques.hartmann@gmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":8},{"ID":75,"Rute ID":75,"Kunde ID":75,"Adresse":"39526 Ledner Valleys Suite 823\nManntown, TN 1","Postnr":77164,"By":"Weldonland","Fornavn":"Bethany","Efternavn":"Bednar","Email":"gschaefer@yahoo.com","Mobil":"","Hjemme":"+10(0)1484455305","Kommentar":"Et ut enim ipsum. Facilis et qui minus pariat","Fejninger":5},{"ID":95,"Rute ID":95,"Kunde ID":95,"Adresse":"014 Gislason Court Apt. 064\nNorth Ima, VT 625","Postnr":50162,"By":"East Hilarioshire","Fornavn":"Madisen","Efternavn":"Welch","Email":"kaelyn40@hotmail.com","Mobil":"","Hjemme":"840.994.5849","Kommentar":"","Fejninger":3},{"ID":140,"Rute ID":140,"Kunde ID":140,"Adresse":"608 Gerson Center\nDallintown, RI 14810-2830","Postnr":16886,"By":"North Whitney","Fornavn":"Milo","Efternavn":"Emard","Email":"linwood.o'conner@gmail.com","Mobil":"180-230-7500","Hjemme":"","Kommentar":"Dolore molestiae est quasi voluptas ad qui to","Fejninger":4},{"ID":141,"Rute ID":141,"Kunde ID":141,"Adresse":"30748 Howell Lane Apt. 940\nSouth Carolborough","Postnr":16789,"By":"Olsonbury","Fornavn":"Abbie","Efternavn":"Kling","Email":"bartell.adrianna@yahoo.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":3},{"ID":185,"Rute ID":185,"Kunde ID":185,"Adresse":"26686 Turner Canyon Apt. 230\nDevonfort, MD 41","Postnr":33163,"By":"Nienowshire","Fornavn":"Aimee","Efternavn":"Johnston","Email":"eddie63@gmail.com","Mobil":"792.342.7021","Hjemme":"927-958-8866x65183","Kommentar":"Fugiat at cupiditate voluptatem velit consequ","Fejninger":0},{"ID":191,"Rute ID":191,"Kunde ID":191,"Adresse":"8281 Goyette Islands Apt. 869\nWest Dixiebury,","Postnr":81637,"By":"West Casimer","Fornavn":"Myriam","Efternavn":"Ortiz","Email":"fatima.koch@hotmail.com","Mobil":"","Hjemme":"","Kommentar":"","Fejninger":0}]
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
routeCustomerRouter.get(`${EndpointSubs.Get}/RouteCustomer/ZipCode`, RouteCustomerController.GetRouteCustomerByZipCode);

// POST

/**
 * @swagger
 * /Add/RouteCustomer:
 *   post:
 *     summary: Add a RouteCustomer
 *     tags: [RouteCustomers]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - RouteID
 *               - CustomerID
 *               - CityID
 *             properties:
 *               RouteID:
 *                 type: string
 *                 example: 200
 *               CustomerID:
 *                 type: string
 *                 example: 200
 *               CityID:
 *                 type: string
 *                 example: 200
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "New RouteCustomer has been added"
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
routeCustomerRouter.post(`${EndpointSubs.Add}/RouteCustomer`, RouteCustomerController.AddRouteCustomer);

// DELETE

/**
 * @swagger
 * /Remove/RouteCustomer:
 *   delete:
 *     summary: Remove a RouteCustomer by ID
 *     tags: [RouteCustomers]
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
 *                 Message: OK, RouteCustomer with id 200 has been removed
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
routeCustomerRouter.delete(`${EndpointSubs.Delete}/RouteCustomer`, RouteCustomerController.RemoveRouteCustomer);

export {
    routeCustomerRouter
}