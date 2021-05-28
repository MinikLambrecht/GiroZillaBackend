import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { ServiceProductModel } from '../Models';

let ServiceProduct = (id, ServiceID, ProductID, ProductName, ProductPrice, ProductDescription) => new ServiceProductModel(
    id,
    ServiceID,
    ProductID,
    ProductName,
    ProductPrice,
    ProductDescription
);

function AddServiceProduct(req, res)
{
    let nsp = ServiceProduct(
        null,
        req.body.ServiceID,
        req.body.ProductID,
        null,
        null,
        null
    );

    const q = `CALL girozilla.Add_ServiceProduct(${nsp.ServiceID}, ${nsp.ProductID})`;

    pool.query(q, (err, rows) => {
        if(!err)
        {
            if (isNaN(nsp.ServiceID) || isNaN(nsp.ProductID))
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nsp.ServiceID == "" || nsp.ProductID == "")
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `New ServiceProduct has been added`, logger);
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

function GetAllServiceProducts(req, res)
{
    const q = `CALL girozilla.Get_All_ServiceProducts()`;

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

function GetServiceProductByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_ServiceProduct_By_ID(${id})`;

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

function GetServiceProductByProductName(req, res)
{
    let ProductName = req.query.ProductName;

    const q = `CALL girozilla.Get_ServiceProduct_By_ProductName('${ProductName}')`;

    pool.query(q, (err, rows) =>
    {
        if (ProductName == "" || rows[0].length < 1)
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

function EditServiceProduct(req, res)
{
    let nsp = ServiceProduct(
        req.body.id,
        req.body.ServiceID,
        req.body.ProductID,
        req.body.ProductName,
        req.body.ProductPrice,
        req.body.ProductDescription
    );

    const q = `CALL girozilla.Edit_ServiceProduct(${nsp.id}, ${nsp.ServiceID}, ${nsp.ProductID}, '${nsp.ProductName}', ${nsp.ProductPrice}, '${nsp.ProductDescription}')`;

    pool.query(q, (err, rows) => 
    {
        if(isNaN(nsp.id) || isNaN(nsp.ServiceID) || isNaN(nsp.ProductID) || isNaN(nsp.ProductPrice))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nsp.id == "" || nsp.ServiceID == "" || nsp.ProductID == "" || nsp.ProductPrice == "")
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nsp.ProductName == null || !nsp.ProductName || nsp.ProductName == undefined) 
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
            SendHTTPCode(res, 200, `ServiceProduct with id ${nsp.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveServiceProduct(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_ServiceProduct(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, ServiceProduct with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    AddServiceProduct,
    GetAllServiceProducts,
    GetServiceProductByID,
    GetServiceProductByProductName,
    EditServiceProduct,
    RemoveServiceProduct,
};