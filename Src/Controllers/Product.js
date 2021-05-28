import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { ProductModel } from '../Models';

let Product = (id, Name, Price, Description) => new ProductModel(
    id,
    Name,
    Price,
    Description
);

function AddProduct(req, res)
{
    let np = Product(
        null,
        req.body.Name,
        req.body.Price,
        req.body.Description
    );

    const q = `CALL girozilla.Add_Product('${np.Name}', ${np.Price}, '${np.Description}')`;

    pool.query(q, (err, rows) => 
    {
        if(!err)
        {
            if (np.Name == null || !np.Name || np.Name == undefined)
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `${np.Name} Has been added to products`, logger);
            }
        }
        else
        {
            switch(err.code)
            {
                case "ER_BAD_FIELD_ERROR":
                    {
                        SendHTTPCodeMySQL(err, logger, res, 400);
                        break;
                    }
            }
        }
    });
}

function GetAllProducts(req, res)
{
    const q = `CALL girozilla.Get_All_Products()`;

    pool.query(q, (err, rows) => 
    {
        if (!err && rows[0].length > 0)
        {
            SendHTTPCodeResultArray(rows, res, 200);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function GetProductByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_Product_By_ID(${id})`;

    pool.query(q, (err, rows) =>
    {
        if(isNaN(id))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (id == "" || rows[0].length < 1)
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (!err && rows[0].length > 0)
        {
            SendHTTPCodeResultObject(rows, res, 200);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function GetProductByName(req, res)
{
    let Name = req.query.Name;

    const q = `CALL girozilla.Get_Product_By_Name('${Name}')`;

    pool.query(q, (err, rows) =>
    {
        if (Name == "" || rows[0].length < 1)
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (!err && rows[0].length > 0)
        {
            SendHTTPCodeResultArray(rows, res, 200);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function EditProduct(req, res)
{
    let np = Product(
        req.body.id,
        req.body.Name,
        req.body.Price,
        req.body.Description
    );

    const q = `CALL girozilla.Edit_Product(${np.id}, '${np.Name}', ${np.Price}, '${np.Description}')`;

    pool.query(q, (err, rows) => 
    {
        if(isNaN(np.id))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (np.id == "")
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (np.Name == null || !np.Name || np.Name == undefined) 
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `Product with id ${np.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveProduct(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_Product(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, Product with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    AddProduct,
    GetAllProducts,
    GetProductByID,
    GetProductByName,
    EditProduct,
    RemoveProduct,
};