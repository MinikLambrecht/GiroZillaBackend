/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - Navn
 *       properties:
 *         ID:
 *           type: integer
 *           description: The Auto-generated id of a product
 *         Navn:
 *           type: string
 *           description: Name of the product
 *         Pris:
 *           type: integer
 *           description: Price of the product
 *         Beskrivelse:
 *           type: string
 *           description: Description of the product
 *       example:
 *         ID: 25
 *         Navn: 1 Skorsten
 *         Pris: 50.45
 *         Beskrivelse: 1 Skorsten
 */

/**
 * @swagger
 *  tags:
 *    name: Products
 *    description: Endpoints to manage Products
 */

// Import dependiencies
import { Router } from 'express';;

// Controllers
import { ProductController } from '../Controllers';

// Config
const productRouter = Router();

import { EndpointSubs } from '../Config/EndpointSubs';

// PUT

/**
 * @swagger
 * /Edit/Product:
 *   put:
 *     summary: Edit a Product
 *     tags: [Products]
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
 *                 example: 25
 *               Name:
 *                 type: string
 *                 example: 2 Skorsten
 *               Price:
 *                 type: integer
 *                 example: 50
 *               Description:
 *                 type: string
 *                 example: 2 Skorsten
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
productRouter.put(`${EndpointSubs.Put}/Product`, ProductController.EditProduct);

// GET

/**
 * @swagger
 * /All/Products:
 *   get:
 *     summary: Returns All Products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: [{"ID":1,"Navn":"et","Pris":65.99,"Beskrivelse":"Reprehenderit totam exercitationem accusantium optio sit molestias esse repellendus. Dolorem asperiores dolorem aut aliquam dolor eligendi quia. Quo dolorem molestiae enim voluptatum magni quia qui."},{"ID":2,"Navn":"ex","Pris":61.35,"Beskrivelse":"Excepturi velit fugiat repudiandae illo sit modi recusandae et. Ut voluptas quia asperiores. Dolorum saepe fugiat optio aut esse voluptatem. Mollitia ex ut et hic est iure."},{"ID":3,"Navn":"eveniet","Pris":84.42,"Beskrivelse":""},{"ID":4,"Navn":"quasi","Pris":51.27,"Beskrivelse":""},{"ID":5,"Navn":"quae","Pris":62.22,"Beskrivelse":"Quidem dolorem ad commodi magni alias dolores. Minima et id mollitia temporibus ad molestias aliquid eos."},{"ID":6,"Navn":"distinctio","Pris":15.97,"Beskrivelse":""},{"ID":7,"Navn":"quia","Pris":33.59,"Beskrivelse":""},{"ID":8,"Navn":"ratione","Pris":46.82,"Beskrivelse":"Et officia impedit cupiditate reiciendis. Omnis veritatis aperiam nesciunt earum consequatur. Iusto eos cumque voluptas. Esse a quia deleniti hic."},{"ID":9,"Navn":"sed","Pris":52.79,"Beskrivelse":""},{"ID":10,"Navn":"molestias","Pris":90.36,"Beskrivelse":"Qui et omnis est similique quos commodi. Iusto odit architecto fuga est. Inventore soluta est accusantium labore qui nihil."}]
 *       400:
 *         description: Bad Request.
 */
productRouter.get(`${EndpointSubs.GetAll}/Products`, ProductController.GetAllProducts);

/**
 * @swagger
 * /Get/Product/id:
 *   get:
 *     summary: Return a Product by ID
 *     tags: [Products]
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
 *               $ref: '#/components/schemas/Product'
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
productRouter.get(`${EndpointSubs.Get}/Product/id`, ProductController.GetProductByID);

/**
 * @swagger
 * /Get/Product/Name:
 *   get:
 *     summary: Search Products by Name
 *     tags: [Products]
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
 *               example: [{"ID":4,"Navn":"quasi","Pris":51.27,"Beskrivelse":""},{"ID":5,"Navn":"quae","Pris":62.22,"Beskrivelse":"Quidem dolorem ad commodi magni alias dolores. Minima et id mollitia temporibus ad molestias aliquid eos."},{"ID":7,"Navn":"quia","Pris":33.59,"Beskrivelse":""},{"ID":14,"Navn":"quis","Pris":91.51,"Beskrivelse":"Ipsum officia sint non repellat eos. Iure nam aut velit eos ratione. Voluptas sunt odio nesciunt veniam id voluptas."},{"ID":15,"Navn":"quia","Pris":87.21,"Beskrivelse":"Quaerat vel vel iure dicta voluptatem tempora. In asperiores laudantium vel dolorem quia."},{"ID":26,"Navn":"quis","Pris":74.77,"Beskrivelse":"Corporis cumque rerum quis rerum praesentium rerum dolor. Ut sint veritatis est odio sit sint consequatur est."},{"ID":27,"Navn":"sequi","Pris":52.05,"Beskrivelse":"Ut et tenetur enim dolor. Architecto temporibus ut non et reiciendis. Eos ullam officiis reiciendis animi debitis. Et rerum et voluptatem ad corporis corrupti. Qui ut voluptas impedit minima."},{"ID":28,"Navn":"quaerat","Pris":83.39,"Beskrivelse":""},{"ID":35,"Navn":"quia","Pris":55.43,"Beskrivelse":"Vel labore voluptatem rerum debitis porro a ex. Asperiores cum voluptatem cum aut placeat id et. Est modi est dolorem distinctio voluptates."},{"ID":50,"Navn":"quia","Pris":41.24,"Beskrivelse":"Doloribus aut occaecati et eum. Odit debitis eos voluptas alias. Et est natus corporis laborum quis ut minima. Sit laborum facere vero excepturi ut quis rerum."}]
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
productRouter.get(`${EndpointSubs.Get}/Product/Name`, ProductController.GetProductByName);

// Post

/**
 * @swagger
 * /Add/Product:
 *   post:
 *     summary: Add a Product
 *     tags: [Products]
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
 *                 example: 25
 *               Name:
 *                 type: string
 *                 example: 1 Skorsten
 *               Price:
 *                 type: integer
 *                 example: 99.99
 *               Description:
 *                 type: string
 *                 example: 1 Skorsten
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
 *                 Code: 405,
 *                 Message: Method Not Allowed
 */
productRouter.post(`${EndpointSubs.Add}/Product`, ProductController.AddProduct);

// Delete

/**
 * @swagger
 * /Remove/Product:
 *   delete:
 *     summary: Remove a Product by ID
 *     tags: [Products]
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
 *                 Message: OK, Product with id 25 has been removed
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
productRouter.delete(`${EndpointSubs.Delete}/Product`, ProductController.RemoveProduct);

export {
    productRouter
}