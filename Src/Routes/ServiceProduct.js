/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceProduct:
 *       type: object
 *       required:
 *         - ID
 *         - Fejnings ID
 *         - Produkt ID
 *         - Produkt Navn
 *         - Pris
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a serviceproduct
 *         Fejnings ID:
 *           type: integer
 *           description: ID of the service tied to the serviceproduct
 *         Produkt Navn:
 *           type: string
 *           description: Name of the product
 *         Pris:
 *           type: integer
 *           description: Price of the product
 *         Produkt ID:
 *           type: integer
 *           description: ID of the product tied to the service product
 *         Beskrivelse:
 *           type: string
 *           description: Description of the product
 *       example:
 *         ID: 25
 *         Fejnings ID: 25
 *         Produkt Navn: 2 Skorsten
 *         Pris: 50
 *         Produkt ID: 25
 *         Beskrivelse: 2 Skorsten
 */

/**
 * @swagger
 *  tags:
 *    name: ServiceProducts
 *    description: Endpoints to manage ServiceProducts
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { ServiceProductController } from '../Controllers';

// Config
const serviceProductRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/ServiceProduct:
 *   put:
 *     summary: Edit a ServiceProduct
 *     tags: [ServiceProducts]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - ServiceID
 *               - ProductID
 *               - ProductName
 *               - ProductPrice
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 125
 *               ServiceID:
 *                 type: integer
 *                 example: 125
 *               ProductID:
 *                 type: integer
 *                 example: 125
 *               ProductName:
 *                 type: string
 *                 example: eiusut
 *               ProductPrice:
 *                 type: integer
 *                 example: 80.75
 *               ProductDescription:
 *                 type: string
 *                 example: Corporis cumque rerum quis rerum praesentium rerum dolor. Ut sint veritatis est odio sit sint consequatur est.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Message: Product with id 25 has been changed.
 *       204:
 *         description: No Content.
 *       400:
 *         description: Bad Request.
 */
serviceProductRouter.put(`${EndpointSubs.Put}/ServiceProduct`, ServiceProductController.EditServiceProduct);

// GET

/**
 * @swagger
 * /All/ServiceProducts:
 *   get:
 *     summary: Returns All ServiceProducts
 *     tags: [ServiceProducts]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Fejnings ID":1,"Produkt Navn":"et","Pris":65.99,"Produkt ID":1,"Beskrivelse":"Reprehenderit totam exercitationem accusantium optio sit molestias esse repellendus. Dolorem asperiores dolorem aut aliquam dolor eligendi quia. Quo dolorem molestiae enim voluptatum magni quia qui."},{"ID":2,"Fejnings ID":2,"Produkt Navn":"ex","Pris":61.35,"Produkt ID":2,"Beskrivelse":"Excepturi velit fugiat repudiandae illo sit modi recusandae et. Ut voluptas quia asperiores. Dolorum saepe fugiat optio aut esse voluptatem. Mollitia ex ut et hic est iure."},{"ID":3,"Fejnings ID":3,"Produkt Navn":"eveniet","Pris":84.42,"Produkt ID":3,"Beskrivelse":""},{"ID":4,"Fejnings ID":4,"Produkt Navn":"quasi","Pris":51.27,"Produkt ID":4,"Beskrivelse":""},{"ID":5,"Fejnings ID":5,"Produkt Navn":"quae","Pris":62.22,"Produkt ID":5,"Beskrivelse":"Quidem dolorem ad commodi magni alias dolores. Minima et id mollitia temporibus ad molestias aliquid eos."},{"ID":6,"Fejnings ID":6,"Produkt Navn":"distinctio","Pris":15.97,"Produkt ID":6,"Beskrivelse":""},{"ID":7,"Fejnings ID":7,"Produkt Navn":"quia","Pris":33.59,"Produkt ID":7,"Beskrivelse":""},{"ID":8,"Fejnings ID":8,"Produkt Navn":"ratione","Pris":46.82,"Produkt ID":8,"Beskrivelse":"Et officia impedit cupiditate reiciendis. Omnis veritatis aperiam nesciunt earum consequatur. Iusto eos cumque voluptas. Esse a quia deleniti hic."},{"ID":9,"Fejnings ID":9,"Produkt Navn":"sed","Pris":52.79,"Produkt ID":9,"Beskrivelse":""},{"ID":10,"Fejnings ID":10,"Produkt Navn":"molestias","Pris":90.36,"Produkt ID":10,"Beskrivelse":"Qui et omnis est similique quos commodi. Iusto odit architecto fuga est. Inventore soluta est accusantium labore qui nihil."}]
 *       400:
 *         description: Bad Request.
 */
serviceProductRouter.get(`${EndpointSubs.GetAll}/ServiceProducts`, ServiceProductController.GetAllServiceProducts);

/**
 * @swagger
 * /Get/ServiceProduct/id:
 *   get:
 *     summary: Return a ServiceProduct by ID
 *     tags: [ServiceProducts]
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
 *               $ref: '#/components/schemas/ServiceProduct'
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
serviceProductRouter.get(`${EndpointSubs.Get}/ServiceProduct/id`, ServiceProductController.GetServiceProductByID);

/**
 * @swagger
 * /Get/ServiceProduct/ProductName:
 *   get:
 *     summary: Search ServiceProducts by Name
 *     tags: [ServiceProducts]
 *     parameters:
 *       - in: query
 *         name: ProductName
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":4,"Fejnings ID":4,"Produkt Navn":"quasi","Pris":51.27,"Produkt ID":4,"Beskrivelse":""},{"ID":5,"Fejnings ID":5,"Produkt Navn":"quae","Pris":62.22,"Produkt ID":5,"Beskrivelse":"Quidem dolorem ad commodi magni alias dolores. Minima et id mollitia temporibus ad molestias aliquid eos."},{"ID":7,"Fejnings ID":7,"Produkt Navn":"quia","Pris":33.59,"Produkt ID":7,"Beskrivelse":""},{"ID":14,"Fejnings ID":14,"Produkt Navn":"quis","Pris":91.51,"Produkt ID":14,"Beskrivelse":"Ipsum officia sint non repellat eos. Iure nam aut velit eos ratione. Voluptas sunt odio nesciunt veniam id voluptas."},{"ID":15,"Fejnings ID":15,"Produkt Navn":"quia","Pris":87.21,"Produkt ID":15,"Beskrivelse":"Quaerat vel vel iure dicta voluptatem tempora. In asperiores laudantium vel dolorem quia."},{"ID":26,"Fejnings ID":26,"Produkt Navn":"quis","Pris":74.77,"Produkt ID":26,"Beskrivelse":"Corporis cumque rerum quis rerum praesentium rerum dolor. Ut sint veritatis est odio sit sint consequatur est."},{"ID":27,"Fejnings ID":27,"Produkt Navn":"sequi","Pris":52.05,"Produkt ID":27,"Beskrivelse":"Ut et tenetur enim dolor. Architecto temporibus ut non et reiciendis. Eos ullam officiis reiciendis animi debitis. Et rerum et voluptatem ad corporis corrupti. Qui ut voluptas impedit minima."},{"ID":28,"Fejnings ID":28,"Produkt Navn":"quaerat","Pris":83.39,"Produkt ID":28,"Beskrivelse":""},{"ID":35,"Fejnings ID":35,"Produkt Navn":"quia","Pris":55.43,"Produkt ID":35,"Beskrivelse":"Vel labore voluptatem rerum debitis porro a ex. Asperiores cum voluptatem cum aut placeat id et. Est modi est dolorem distinctio voluptates."},{"ID":50,"Fejnings ID":50,"Produkt Navn":"quia","Pris":41.24,"Produkt ID":50,"Beskrivelse":"Doloribus aut occaecati et eum. Odit debitis eos voluptas alias. Et est natus corporis laborum quis ut minima. Sit laborum facere vero excepturi ut quis rerum."}]
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
serviceProductRouter.get(`${EndpointSubs.Get}/ServiceProduct/ProductName`, ServiceProductController.GetServiceProductByProductName);

// POST

/**
 * @swagger
 * /Add/ServiceProduct:
 *   post:
 *     summary: Add a ServiceProduct
 *     tags: [ServiceProducts]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - ServiceID
 *               - ProductID
 *               - ProductName
 *               - ProductPrice
 *             properties:
 *               ServiceID:
 *                 type: integer
 *                 example: 125
 *               ProductID:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example: 
 *                 Message: "New ServiceProduct has been added"
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
serviceProductRouter.post(`${EndpointSubs.Add}/ServiceProduct`, ServiceProductController.AddServiceProduct);

// DELETE

/**
 * @swagger
 * /Remove/ServiceProduct:
 *   delete:
 *     summary: Remove a ServiceProduct by ID
 *     tags: [ServiceProducts]
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
 *                 Message: OK, ServiceProduct with id 125 has been removed
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
serviceProductRouter.delete(`${EndpointSubs.Delete}/ServiceProduct`, ServiceProductController.RemoveServiceProduct);

export {
    serviceProductRouter
}