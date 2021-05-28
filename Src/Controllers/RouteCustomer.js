import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { RouteCustomerModel } from '../Models';

let RouteCustomer = (id, RouteID, CustomerID, CityID) => new RouteCustomerModel(
    id,
    CustomerID,
    RouteID,
    CityID
);

function AddRouteCustomer(req, res)
{
    let nrc = RouteCustomer(
        null,
        req.body.RouteID,
        req.body.CustomerID,
        req.body.CityID
    );

    const q = `CALL girozilla.Add_RouteCustomer(${nrc.RouteID}, ${nrc.CustomerID}, ${nrc.CityID})`;

    pool.query(q, (err, rows) => {
        if(!err)
        {
            if (isNaN(nrc.RouteID) || isNaN(nrc.CustomerID) || isNaN(nrc.CityID))
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nrc.RouteID == "" || nrc.CustomerID == "" || nrc.CityID == "")
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `New RouteCustomer has been added`, logger);
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

function GetAllRouteCustomers(req, res)
{
    const q = `CALL girozilla.Get_All_RouteCustomers()`;

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

function GetRouteCustomerByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_RouteCustomer_By_ID(${id})`;

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

function GetRouteCustomerByRouteID(req, res)
{
    let RouteID = req.query.RouteID;

    const q = `CALL girozilla.Get_RouteCustomer_By_RouteID(${RouteID})`;

    pool.query(q, (err, rows) =>
    {
        if(isNaN(RouteID))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (RouteID == "" || rows[0].length < 1)
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

function GetRouteCustomerByCustomerID(req, res)
{
    let CustomerID = req.query.CustomerID;

    const q = `CALL girozilla.Get_RouteCustomer_By_CustomerID(${CustomerID})`;

    pool.query(q, (err, rows) =>
    {
        if(isNaN(CustomerID))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (CustomerID == "" || rows[0].length < 1)
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

function GetRouteCustomerByFirstName(req, res)
{
    let FirstName = req.query.FirstName;

    const q = `CALL girozilla.Get_RouteCustomer_By_FirstName('${FirstName}')`;

    pool.query(q, (err, rows) =>
    {
        if (FirstName == "" || rows[0].length < 1)
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

function GetRouteCustomerByLastName(req, res)
{
    let LastName = req.query.LastName;

    const q = `CALL girozilla.Get_RouteCustomer_By_LastName('${LastName}')`;

    pool.query(q, (err, rows) =>
    {
        if (LastName == "" || rows[0].length < 1)
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (!err && rows[0].length > 0)
        {
            SendHTTPCodeResultArray(rows, res, 200);;
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function GetRouteCustomerByAddress(req, res)
{
    let Address = req.query.Address;

    const q = `CALL girozilla.Get_RouteCustomer_By_Address('${Address}')`;

    pool.query(q, (err, rows) =>
    {
        if (Address == "" || rows[0].length < 1)
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

function GetRouteCustomerByCity(req, res)
{
    let City = req.query.City;

    const q = `CALL girozilla.Get_RouteCustomer_By_City('${City}')`;

    pool.query(q, (err, rows) =>
    {
        if (City == "" || rows[0].length < 1)
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

function GetRouteCustomerByZipCode(req, res)
{
    let ZipCode = req.query.ZipCode;

    const q = `CALL girozilla.Get_RouteCustomer_By_ZipCode(${ZipCode})`;

    pool.query(q, (err, rows) =>
    {
        if (isNaN(ZipCode))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (ZipCode == "" || rows[0].length < 1)
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

function EditRouteCustomer(req, res)
{
    let nrc = RouteCustomer(
        req.body.id,
        req.body.RouteID,
        req.body.CustomerID,
        req.body.CityID
    );

    const q = `CALL girozilla.Edit_RouteCustomer(${nrc.id}, ${nrc.RouteID}, ${nrc.CustomerID}, ${nrc.CityID})`;

    pool.query(q, (err, rows) => 
    {
        if (isNaN(nrc.RouteID) || isNaN(nrc.CustomerID) || isNaN(nrc.CityID))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nrc.RouteID == "" || nrc.CustomerID == "" || nrc.CityID == "")
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `RouteCustomer with id ${nrc.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveRouteCustomer(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_RouteCustomer(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (isNaN(id))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (id == "")
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, RouteCustomer with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    AddRouteCustomer,
    GetAllRouteCustomers,
    GetRouteCustomerByID,
    GetRouteCustomerByRouteID,
    GetRouteCustomerByCustomerID,
    GetRouteCustomerByFirstName,
    GetRouteCustomerByLastName,
    GetRouteCustomerByAddress,
    GetRouteCustomerByCity,
    GetRouteCustomerByZipCode,
    EditRouteCustomer,
    RemoveRouteCustomer,
};