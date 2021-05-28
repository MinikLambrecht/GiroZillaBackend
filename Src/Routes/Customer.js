/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
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
 *           description: The Auto-generated id of a customer
 *         Fornavn:
 *           type: string
 *           description: Firstname of a customer
 *         Efternavn:
 *           type: string
 *           description: Lastname of a customer
 *         Adresse:
 *           type: string
 *           description: Address of a customer
 *         Postnr:
 *           type: integer
 *           description: Zipcode of a customer
 *         By:
 *           type: integer
 *           description: City of a customer
 *         Fejninger:
 *           type: integer
 *           description: Services needed for a customer
 *         Kommentar:
 *           type: string
 *           description: Optional comment for a customer
 *         Mobil:
 *           type: string
 *           description: Optional mobile phone number of a customer
 *         Hjemme:
 *           type: string
 *           description: Optional home phone number of a customer
 *         Email:
 *           type: string
 *           description: E-mail address of a customer
 *         Maaned:
 *           type: string
 *           description: Optional Month of a customer
 *       example:
 *         ID: 50
 *         Fornavn: Breanne
 *         Efternavn: O'Reilly
 *         Adresse: 99340 Nitzsche Pines Suite 236 Blockhaven, FL
 *         Postnr: 30042
 *         By: South Angel
 *         Fejninger: 1
 *         Kommentar: Key under doormat.
 *         Mobil:  (657) 217-0426-9478
 *         Hjemme: (082) 163-4482-5973
 *         Email: bell.killback@kshlering.org
 *         Maaned: August
 */

/**
 * @swagger
 *  tags:
 *    name: Customers
 *    description: Endpoints to manage Customers
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { CustomerController } from '../Controllers';

// Config
const customerRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/Customer:
 *   put:
 *     summary: Edit a Customer
 *     tags: [Customers]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - FirstName
 *               - LastName
 *               - Address
 *               - City
 *               - Email
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 251
 *               FirstName:
 *                 type: string
 *                 example: Ben
 *               LastName:
 *                 type: string
 *                 example: Wilson
 *               Address:
 *                 type: string
 *                 example: 2033 Renner Springs Lake Clement
 *               City:
 *                 type: string
 *                 example: 100
 *               ServicesNeeded:
 *                 type: integer
 *                 example: 3
 *               Comment:
 *                 type: string
 *                 example: He likes coffee.
 *               MobilePhoneNumber:
 *                 type: string
 *                 example: 648-538-5798
 *               HomePhoneNumber:
 *                 type: string
 *                 example: 046-735-9224
 *               Email:
 *                 type: string
 *                 example: BenGWilson@armyspy.com
 *               Month:
 *                 type: string
 *                 example: July
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: Customer with id 251 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
customerRouter.put(`${EndpointSubs.Put}/Customer`, CustomerController.EditCustomer);

// GET

/**
 * @swagger
 * /All/Customers:
 *   get:
 *     summary: Returns All Customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Fornavn":"Pablo","Efternavn":"Aufderhar","Adresse":"9505 Marcel Meadow\nWolffside, KS 23858-7650","Postnr":12348,"By":"Rollinborough","Fejninger":4,"Kommentar":"","Mobil":"232-373-3531","Hjemme":"1-481-835-4436x505","Email":"blaze.bailey@yahoo.com","Maaned":"September"},{"ID":2,"Fornavn":"Lilliana","Efternavn":"Johnston","Adresse":"870 Paucek Ramp Suite 377\nOranton, VA 15029","Postnr":81431,"By":"Clarabelleburgh","Fejninger":9,"Kommentar":"","Mobil":"","Hjemme":"1-373-059-2622x73601","Email":"eleazar76@reynolds.com","Maaned":"May"},{"ID":3,"Fornavn":"Werner","Efternavn":"Ryan","Adresse":"218 Keyshawn Grove Suite 068\nMannville, LA 50","Postnr":21066,"By":"Mikaylafurt","Fejninger":7,"Kommentar":"Ducimus sint nostrum rerum recusandae impedit","Mobil":"","Hjemme":"","Email":"hegmann.theron@rueckerheaney.biz","Maaned":"February"},{"ID":4,"Fornavn":"Jaclyn","Efternavn":"Dooley","Adresse":"998 Ferry Drive Apt. 302\nLake Brain, DE 54056","Postnr":39862,"By":"West Ivah","Fejninger":4,"Kommentar":"","Mobil":"","Hjemme":"469.044.0097x288","Email":"guy.wilderman@roobmayert.com","Maaned":"February"},{"ID":5,"Fornavn":"Serena","Efternavn":"Mante","Adresse":"02777 Stokes Inlet Apt. 947\nHicklestad, NJ 12","Postnr":38612,"By":"South Reinholdmouth","Fejninger":8,"Kommentar":"","Mobil":"","Hjemme":"(626)435-4472x263","Email":"vhills@hotmail.com","Maaned":"March"},{"ID":6,"Fornavn":"Rosendo","Efternavn":"Ratke","Adresse":"95360 Weber Brook\nLake Ottomouth, IN 08874","Postnr":54269,"By":"Kimmouth","Fejninger":9,"Kommentar":"","Mobil":"1-865-056-2902","Hjemme":"(430)349-8963","Email":"jon.krajcik@yahoo.com","Maaned":"January"},{"ID":7,"Fornavn":"Emmet","Efternavn":"Gorczany","Adresse":"5702 Hammes Streets\nWest Hubertstad, WI 11813","Postnr":81425,"By":"New Tiffanyside","Fejninger":1,"Kommentar":"Aliquam autem non ipsa atque perspiciatis ver","Mobil":"429.755.7866x1318","Hjemme":"","Email":"bruen.myrtle@terryarmstrong.com","Maaned":"October"},{"ID":8,"Fornavn":"Lucienne","Efternavn":"Cartwright","Adresse":"8992 Jared Parkways\nLake Iciemouth, MN 92070-","Postnr":19516,"By":"Kimhaven","Fejninger":0,"Kommentar":"","Mobil":"+02(5)7473066844","Hjemme":"+93(9)1350910074","Email":"don07@hotmail.com","Maaned":"March"},{"ID":9,"Fornavn":"Malvina","Efternavn":"Bechtelar","Adresse":"83698 Beer Highway Apt. 621\nNorth Blanche, MT","Postnr":20456,"By":"Kovacekburgh","Fejninger":3,"Kommentar":"Sed porro nihil sed officia. Consequatur est ","Mobil":"","Hjemme":"","Email":"barrows.meghan@rolfsonokuneva.com","Maaned":"March"},{"ID":10,"Fornavn":"Garland","Efternavn":"Friesen","Adresse":"437 Patricia Rest Suite 503\nMaverickborough, ","Postnr":74699,"By":"North Meda","Fejninger":9,"Kommentar":"","Mobil":"(881)508-0342x59331","Hjemme":"","Email":"green.ivah@mertz.com","Maaned":"February"}]
 *       400:
 *         description: Bad Request.
 */
customerRouter.get(`${EndpointSubs.GetAll}/Customers`, CustomerController.GetAllCustomers);

/**
 * @swagger
 * /Get/Customer/id:
 *   get:
 *     summary: Return a Customer by ID
 *     tags: [Customers]
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
 *               $ref: '#/components/schemas/Customer'
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
customerRouter.get(`${EndpointSubs.Get}/Customer/id`, CustomerController.GetCustomerByID);

/**
 * @swagger
 * /Get/Customer/FirstName:
 *   get:
 *     summary: Search Customers by FirstName
 *     tags: [Customers]
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
 *               example: [{"ID":2,"Fornavn":"Laila","Efternavn":"Hayes","Adresse":"134 Brendon Ridges\nMonahanbury, NH 71549-7190","Postnr":22563,"By":"Yolandaberg","Fejninger":5,"Kommentar":"Qui est dolores optio voluptas. Temporibus co","Mobil":"930.695.9397x78622","Hjemme":"","Email":"orn.reagan@gmail.com","Maaned":"March"},{"ID":4,"Fornavn":"Mckenna","Efternavn":"Nienow","Adresse":"8741 Reilly Common Apt. 304\nNew Darrickshire,","Postnr":57470,"By":"Lake Emiliachester","Fejninger":6,"Kommentar":"","Mobil":"","Hjemme":"","Email":"huel.nasir@hotmail.com","Maaned":"January"},{"ID":6,"Fornavn":"Abigale","Efternavn":"Harber","Adresse":"09384 Etha Dale\nWest Bernita, NM 85456-2824","Postnr":1405,"By":"Lake Leda","Fejninger":9,"Kommentar":"","Mobil":"","Hjemme":"","Email":"cora05@yahoo.com","Maaned":""},{"ID":7,"Fornavn":"Kenyatta","Efternavn":"Dach","Adresse":"17128 Danika Mission Suite 556\nKaydenborough,","Postnr":76652,"By":"Prosaccomouth","Fejninger":6,"Kommentar":"Eos voluptas voluptatem doloribus officia. Qu","Mobil":"221.881.7701","Hjemme":"246-734-7935x86875","Email":"chalvorson@hotmail.com","Maaned":"August"},{"ID":8,"Fornavn":"Giovanna","Efternavn":"Stokes","Adresse":"7992 Hoppe Ridge\nElmermouth, OH 07357-7995","Postnr":1759,"By":"Lake Joaquin","Fejninger":4,"Kommentar":"Est hic itaque quia velit. Omnis ratione volu","Mobil":"970.501.5065","Hjemme":"","Email":"richard85@gmail.com","Maaned":"December"},{"ID":10,"Fornavn":"Jan","Efternavn":"Kuhlman","Adresse":"8016 Tillman Roads\nPort Jermain, MD 46021","Postnr":93071,"By":"Reichelhaven","Fejninger":5,"Kommentar":"","Mobil":"","Hjemme":"","Email":"cassin.howard@hotmail.com","Maaned":""},{"ID":11,"Fornavn":"Alanna","Efternavn":"Brekke","Adresse":"4347 Collier Ford Apt. 504\nLueilwitzhaven, PA","Postnr":94918,"By":"South Isidrohaven","Fejninger":0,"Kommentar":"","Mobil":"(324)991-5911x913","Hjemme":"655-648-4588x689","Email":"lacy.weimann@yahoo.com","Maaned":"April"},{"ID":12,"Fornavn":"Lukas","Efternavn":"Rice","Adresse":"5320 Dickinson Ranch Suite 451\nDarenland, KY ","Postnr":20084,"By":"New Bradford","Fejninger":7,"Kommentar":"","Mobil":"355.421.5592x51560","Hjemme":"03573400835","Email":"mathew.mills@gmail.com","Maaned":""},{"ID":13,"Fornavn":"Norval","Efternavn":"Witting","Adresse":"35722 Cloyd Curve Suite 824\nLake Garrison, ID","Postnr":15159,"By":"Lake Ezrashire","Fejninger":7,"Kommentar":"Aut unde id accusamus praesentium sunt reicie","Mobil":"","Hjemme":"","Email":"claudie.bruen@hotmail.com","Maaned":""},{"ID":14,"Fornavn":"Elda","Efternavn":"Schmitt","Adresse":"782 Otto Drives\nLake Jacky, WA 67377-8629","Postnr":51753,"By":"Nasirburgh","Fejninger":1,"Kommentar":"","Mobil":"1-641-253-4353","Hjemme":"","Email":"nitzsche.josephine@yahoo.com","Maaned":"June"}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get(`${EndpointSubs.Get}/Customer/FirstName`, CustomerController.GetCustomerByFirstname);

/**
 * @swagger
 * /Get/Customer/LastName:
 *   get:
 *     summary: Search Customers by LastName
 *     tags: [Customers]
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
 *               example: [{"ID":2,"Fornavn":"Laila","Efternavn":"Hayes","Adresse":"134 Brendon Ridges\nMonahanbury, NH 71549-7190","Postnr":22563,"By":"Yolandaberg","Fejninger":5,"Kommentar":"Qui est dolores optio voluptas. Temporibus co","Mobil":"930.695.9397x78622","Hjemme":"","Email":"orn.reagan@gmail.com","Maaned":"March"},{"ID":15,"Fornavn":"Jany","Efternavn":"Purdy","Adresse":"15933 Dickinson Creek\nGersonport, RI 50499-59","Postnr":12292,"By":"Port Halie","Fejninger":3,"Kommentar":"Recusandae dignissimos architecto quaerat tem","Mobil":"","Hjemme":"160.759.8972","Email":"borer.alexanne@gmail.com","Maaned":"March"},{"ID":16,"Fornavn":"Darrell","Efternavn":"Boyle","Adresse":"9327 Bauch Plaza\nLake Kaleb, NE 31411","Postnr":85590,"By":"New Berniecehaven","Fejninger":3,"Kommentar":"Beatae et ea non et eligendi magnam aperiam. ","Mobil":"","Hjemme":"","Email":"schneider.karianne@yahoo.com","Maaned":""},{"ID":18,"Fornavn":"Wilson","Efternavn":"Hyatt","Adresse":"6252 Gusikowski Islands Suite 521\nDaynaland, ","Postnr":55104,"By":"North Jeromy","Fejninger":7,"Kommentar":"","Mobil":"1-712-567-7788","Hjemme":"","Email":"qkiehn@yahoo.com","Maaned":"November"},{"ID":24,"Fornavn":"Amara","Efternavn":"Boyle","Adresse":"14573 Effertz Bridge\nWindlerport, TN 95711","Postnr":57049,"By":"West Lou","Fejninger":0,"Kommentar":"","Mobil":"","Hjemme":"925-703-1715x82479","Email":"eugenia24@yahoo.com","Maaned":"June"},{"ID":25,"Fornavn":"Mariah","Efternavn":"Kozey","Adresse":"2649 Eichmann Station\nNew Leola, MD 49398","Postnr":41747,"By":"South Anselfurt","Fejninger":5,"Kommentar":"","Mobil":"","Hjemme":"","Email":"luettgen.newell@gmail.com","Maaned":""},{"ID":28,"Fornavn":"Enoch","Efternavn":"Raynor","Adresse":"22656 Diana Center\nLake Macytown, DE 64532-02","Postnr":11369,"By":"Lorenzafort","Fejninger":4,"Kommentar":"","Mobil":"","Hjemme":"","Email":"bstiedemann@yahoo.com","Maaned":""},{"ID":34,"Fornavn":"Myron","Efternavn":"Lynch","Adresse":"53220 Kattie Estate Suite 271\nVandervorttown,","Postnr":71666,"By":"Lake Lyrictown","Fejninger":8,"Kommentar":"Quia quisquam aut quasi est cumque tempora ha","Mobil":"","Hjemme":"072.046.5829x121","Email":"ohyatt@hotmail.com","Maaned":""},{"ID":37,"Fornavn":"Emmanuel","Efternavn":"Wyman","Adresse":"5513 Mitchell Lake\nRiceview, WI 47685-0738","Postnr":66999,"By":"Doyleside","Fejninger":3,"Kommentar":"Deserunt dolorem porro voluptatem officia vol","Mobil":"1-491-188-5700x385","Hjemme":"1-027-471-1393x124","Email":"valentine.ziemann@gmail.com","Maaned":""},{"ID":46,"Fornavn":"Glenda","Efternavn":"Tremblay","Adresse":"20547 Arnulfo Motorway\nPagacport, NH 65165","Postnr":51076,"By":"Lake Hipolito","Fejninger":7,"Kommentar":"","Mobil":"938.747.9615x43586","Hjemme":"+46(6)5397015563","Email":"wallace83@hotmail.com","Maaned":""}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get(`${EndpointSubs.Get}/Customer/LastName`, CustomerController.GetCustomerByLastname);

/**
 * @swagger
 * /Get/Customer/Address:
 *   get:
 *     summary: Search Customers by Address
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: Address
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":27,"Fornavn":"Jeremie","Efternavn":"Schulist","Adresse":"067 Fadel Place\nLake Stefanbury, GA 74986-336","Postnr":31643,"By":"Lake Aniyaberg","Fejninger":1,"Kommentar":"","Mobil":"163-509-6963x83067","Hjemme":"","Email":"wmraz@hotmail.com","Maaned":"December"},{"ID":43,"Fornavn":"Christine","Efternavn":"Bechtelar","Adresse":"360 Lehner Well Suite 484\nNorth Buford, TX 58","Postnr":76075,"By":"Murazikchester","Fejninger":5,"Kommentar":"Autem id aspernatur dolores ea similique. Por","Mobil":"","Hjemme":"(251)203-1178x945","Email":"gustave.borer@yahoo.com","Maaned":"October"},{"ID":50,"Fornavn":"Aletha","Efternavn":"Lubowitz","Adresse":"706 Doyle Crescent\nAlberthatown, ND 54369","Postnr":32548,"By":"Aufderhartown","Fejninger":2,"Kommentar":"Dolorem reprehenderit odit est molestiae non ","Mobil":"","Hjemme":"(734)105-5866x35137","Email":"kathleen.armstrong@hotmail.com","Maaned":""},{"ID":55,"Fornavn":"Ebony","Efternavn":"Yost","Adresse":"236 Colin Ports\nWisokyberg, UT 97362-6440","Postnr":29044,"By":"Corymouth","Fejninger":5,"Kommentar":"Sit rerum blanditiis impedit quia assumenda o","Mobil":"962-300-6701","Hjemme":"190-890-0847x873","Email":"greenholt.orlo@hotmail.com","Maaned":""},{"ID":80,"Fornavn":"Virgil","Efternavn":"West","Adresse":"65963 Stiedemann Rapids Suite 368\nBechtelarvi","Postnr":2885,"By":"Lake Glennieburgh","Fejninger":7,"Kommentar":"","Mobil":"(209)629-6141x7727","Hjemme":"","Email":"libby.botsford@gmail.com","Maaned":"June"},{"ID":144,"Fornavn":"Aisha","Efternavn":"Wintheiser","Adresse":"0573 O'Kon Mall Apt. 738\nPort Robb, VT 51036-","Postnr":91136,"By":"Port Sigridland","Fejninger":2,"Kommentar":"Unde voluptatum corporis aliquam non ratione.","Mobil":"","Hjemme":"","Email":"stracke.erna@gmail.com","Maaned":"September"},{"ID":153,"Fornavn":"Nathanael","Efternavn":"Purdy","Adresse":"2752 Abbigail Flats Apt. 136\nNorth Garettview","Postnr":10445,"By":"Lowefort","Fejninger":0,"Kommentar":"Iusto ea molestiae sunt expedita placeat aut.","Mobil":"","Hjemme":"171.352.1505","Email":"lizzie.murphy@yahoo.com","Maaned":""},{"ID":163,"Fornavn":"Judy","Efternavn":"Parker","Adresse":"9694 Dach Rue\nPort Thaddeus, ME 93684-4548","Postnr":27590,"By":"Lake Ebonyton","Fejninger":4,"Kommentar":"Voluptatem provident est laborum nihil offici","Mobil":"","Hjemme":"000.063.0849x7413","Email":"ona.kiehn@yahoo.com","Maaned":""},{"ID":165,"Fornavn":"Jovani","Efternavn":"Cartwright","Adresse":"21397 Fadel Parkways Suite 366\nLowemouth, MA ","Postnr":2027,"By":"East Angelita","Fejninger":0,"Kommentar":"Ex ut odit voluptatibus rerum. Quas suscipit ","Mobil":"583.586.2952x18662","Hjemme":"174-513-4362","Email":"jeramy34@hotmail.com","Maaned":""},{"ID":178,"Fornavn":"Madalyn","Efternavn":"Wiegand","Adresse":"6245 Bergnaum Stream Apt. 360\nEast Barbaraton","Postnr":42474,"By":"North Genesisland","Fejninger":6,"Kommentar":"Omnis dolor commodi facere officia. Laboriosa","Mobil":"1-086-436-5566x5215","Hjemme":"","Email":"cummerata.sanford@gmail.com","Maaned":""}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get(`${EndpointSubs.Get}/Customer/Address`, CustomerController.GetCustomerByAddress);

/**
 * @swagger
 * /Get/Customer/City:
 *   get:
 *     summary: Search Customers by City
 *     tags: [Customers]
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
 *               example: [{"ID":4,"Fornavn":"Mckenna","Efternavn":"Nienow","Adresse":"8741 Reilly Common Apt. 304\nNew Darrickshire,","Postnr":57470,"By":"Lake Emiliachester","Fejninger":6,"Kommentar":"","Mobil":"","Hjemme":"","Email":"huel.nasir@hotmail.com","Maaned":"January"},{"ID":10,"Fornavn":"Jan","Efternavn":"Kuhlman","Adresse":"8016 Tillman Roads\nPort Jermain, MD 46021","Postnr":93071,"By":"Reichelhaven","Fejninger":5,"Kommentar":"","Mobil":"","Hjemme":"","Email":"cassin.howard@hotmail.com","Maaned":""},{"ID":21,"Fornavn":"Otho","Efternavn":"Senger","Adresse":"450 Chanelle Street Suite 690\nSchambergerberg","Postnr":38599,"By":"Reichelville","Fejninger":1,"Kommentar":"","Mobil":"","Hjemme":"","Email":"ojohnson@hotmail.com","Maaned":""},{"ID":32,"Fornavn":"Steve","Efternavn":"Paucek","Adresse":"46637 Bergstrom Crest Suite 247\nMerrittburgh,","Postnr":66257,"By":"Handchester","Fejninger":4,"Kommentar":"","Mobil":"501-833-6519","Hjemme":"(513)760-7880","Email":"treva.dicki@hotmail.com","Maaned":""},{"ID":43,"Fornavn":"Christine","Efternavn":"Bechtelar","Adresse":"360 Lehner Well Suite 484\nNorth Buford, TX 58","Postnr":76075,"By":"Murazikchester","Fejninger":5,"Kommentar":"Autem id aspernatur dolores ea similique. Por","Mobil":"","Hjemme":"(251)203-1178x945","Email":"gustave.borer@yahoo.com","Maaned":"October"},{"ID":51,"Fornavn":"Franz","Efternavn":"Johns","Adresse":"6243 Scot Curve\nPort Onaborough, IN 20293","Postnr":63141,"By":"Hesselville","Fejninger":6,"Kommentar":"","Mobil":"1-007-335-9443","Hjemme":"","Email":"golden.lemke@hotmail.com","Maaned":"March"},{"ID":67,"Fornavn":"Rory","Efternavn":"Herzog","Adresse":"4542 Lincoln Oval Suite 080\nSouth Eddiemouth,","Postnr":69975,"By":"Hershelton","Fejninger":0,"Kommentar":"In voluptas ipsa sit non deleniti. Sunt facer","Mobil":"240-162-4132","Hjemme":"","Email":"dejon09@hotmail.com","Maaned":""},{"ID":76,"Fornavn":"Germaine","Efternavn":"Mann","Adresse":"649 Orn Plaza\nNatalieview, AL 96349","Postnr":26147,"By":"North Heaven","Fejninger":6,"Kommentar":"","Mobil":"","Hjemme":"","Email":"makenna.bernier@gmail.com","Maaned":"May"},{"ID":160,"Fornavn":"Sarina","Efternavn":"Hills","Adresse":"0498 Margaretta Street\nEast Anastasia, CO 621","Postnr":72630,"By":"West Catherine","Fejninger":6,"Kommentar":"Ducimus voluptates aut in ratione. Consequunt","Mobil":"","Hjemme":"910-566-0448x87677","Email":"jaren.kling@hotmail.com","Maaned":"August"},{"ID":162,"Fornavn":"Narciso","Efternavn":"Hodkiewicz","Adresse":"5859 Mikayla Junctions\nNew Novella, UT 02693","Postnr":4741,"By":"South Cheyennebury","Fejninger":4,"Kommentar":"Dolores odit natus a temporibus culpa eum. No","Mobil":"368.551.4271","Hjemme":"998.248.2096x598","Email":"harris.sigmund@gmail.com","Maaned":""}]
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get(`${EndpointSubs.Get}/Customer/City`, CustomerController.GetCustomerByCity);

/**
 * @swagger
 * /Get/Customer/ZipCode:
 *   get:
 *     summary: Search Customers by ZipCode
 *     tags: [Customers]
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
 *               example: [{"ID":83,"Fornavn":"Erik","Efternavn":"O'Kon","Adresse":"8003 Tremaine Divide Apt. 114\nOsinskiville, N","Postnr":72902,"By":"Lake Lavada","Fejninger":9,"Kommentar":"","Mobil":"+17(7)0300749197","Hjemme":"(338)759-2054x7275","Email":"eleffler@yahoo.com","Maaned":"December"},{"ID":94,"Fornavn":"Jerod","Efternavn":"Schultz","Adresse":"3406 McDermott Drive Apt. 246\nHaleyhaven, CA ","Postnr":66872,"By":"East Jessycaview","Fejninger":1,"Kommentar":"Quis adipisci et laboriosam voluptates sit be","Mobil":"546-559-0312x94198","Hjemme":"","Email":"heaney.zachery@hotmail.com","Maaned":""},{"ID":106,"Fornavn":"Jermey","Efternavn":"Muller","Adresse":"604 Strosin Walks\nShanahanport, OK 73190-9427","Postnr":67264,"By":"Austinview","Fejninger":1,"Kommentar":"Vel sit eveniet et deserunt animi ea. Qui ull","Mobil":"395.080.2552x32962","Hjemme":"(041)136-6974","Email":"aylin82@hotmail.com","Maaned":"May"},{"ID":111,"Fornavn":"Abbigail","Efternavn":"Nicolas","Adresse":"2227 Carroll Rest\nKeeblermouth, MA 22451","Postnr":20472,"By":"Bartonport","Fejninger":4,"Kommentar":"Ut natus quo quis quo fugiat consequatur non ","Mobil":"118-563-6306x39595","Hjemme":"","Email":"rosalinda.ward@gmail.com","Maaned":"May"},{"ID":123,"Fornavn":"Timothy","Efternavn":"Wuckert","Adresse":"061 Daniel Stravenue Apt. 245\nEast Jeramyport","Postnr":27277,"By":"Tanyastad","Fejninger":7,"Kommentar":"","Mobil":"","Hjemme":"1-224-354-6879","Email":"bosco.arvel@hotmail.com","Maaned":"December"},{"ID":126,"Fornavn":"Sarina","Efternavn":"Hegmann","Adresse":"171 Gerhard Orchard\nWest Jackymouth, TN 90314","Postnr":15772,"By":"Peytonton","Fejninger":1,"Kommentar":"","Mobil":"786-522-8736x90573","Hjemme":"","Email":"onie36@yahoo.com","Maaned":""},{"ID":133,"Fornavn":"Ophelia","Efternavn":"O'Hara","Adresse":"72591 Huel Orchard Apt. 295\nPort Destiny, SD ","Postnr":24672,"By":"Port Pink","Fejninger":2,"Kommentar":"Delectus debitis iusto nemo ut. Aut magni dol","Mobil":"","Hjemme":"","Email":"skiles.eulalia@gmail.com","Maaned":""},{"ID":160,"Fornavn":"Sarina","Efternavn":"Hills","Adresse":"0498 Margaretta Street\nEast Anastasia, CO 621","Postnr":72630,"By":"West Catherine","Fejninger":6,"Kommentar":"Ducimus voluptates aut in ratione. Consequunt","Mobil":"","Hjemme":"910-566-0448x87677","Email":"jaren.kling@hotmail.com","Maaned":"August"},{"ID":174,"Fornavn":"Grant","Efternavn":"O'Hara","Adresse":"680 Alfredo Walk Apt. 607\nDeontebury, WV 6467","Postnr":37200,"By":"Ortizstad","Fejninger":0,"Kommentar":"Cumque aut qui tempore delectus. Vero dolorem","Mobil":"859-868-8802x6409","Hjemme":"993.255.3844","Email":"nella.bednar@gmail.com","Maaned":"September"},{"ID":188,"Fornavn":"Arnold","Efternavn":"Paucek","Adresse":"0333 Reichel Drive\nLake Laverna, NC 47106","Postnr":98726,"By":"East Earnestinehaven","Fejninger":9,"Kommentar":"Et ipsam repellat non quidem voluptatem aut p","Mobil":"","Hjemme":"","Email":"arvid.prohaska@gmail.com","Maaned":"July"}]
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
customerRouter.get(`${EndpointSubs.Get}/Customer/ZipCode`, CustomerController.GetCustomerByZipcode);

// POST

/**
 * @swagger
 * /Add/Customer:
 *   post:
 *     summary: Add a new Customer
 *     tags: [Customers]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - FirstName
 *               - LastName
 *               - Address
 *               - City
 *               - Email
 *             properties:
 *               FirstName:
 *                 type: string
 *                 example: Jill
 *               LastName:
 *                 type: string
 *                 example: Jenkins
 *               Address:
 *                 type: string
 *                 example: 2033 Columbia Road, DE
 *               City:
 *                 type: string
 *                 example: 50
 *               ServicesNeeded:
 *                 type: integer
 *                 example: 1
 *               Comment:
 *                 type: string
 *                 example: Key under doormat.
 *               MobilePhoneNumber:
 *                 type: string
 *                 example: 302-792-6385
 *               HomePhoneNumber:
 *                 type: string
 *                 example: 976-782-1657
 *               Email:
 *                 type: string
 *                 example: JillBJenkins@armyspy.com
 *               Month:
 *                 type: string
 *                 example: August
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "Customer Jill Jenkins has been added"
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
customerRouter.post(`${EndpointSubs.Add}/Customer`, CustomerController.AddCustomer);

// DELETE

/**
 * @swagger
 * /Remove/Customer:
 *   delete:
 *     summary: Remove a Customer by ID
 *     tags: [Customers]
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
 *                 Message: OK, Customer with id 50 has been removed
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
customerRouter.delete(`${EndpointSubs.Delete}/Customer`, CustomerController.RemoveCustomer);

export {
    customerRouter
}