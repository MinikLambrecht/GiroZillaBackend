import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { CustomerModel } from '../Models';

let Customer = (id, FirstName, LastName, Address, ZipCode, City, ServicesNeeded, Comment, MobilePhoneNumber, HomePhoneNumber, Email, Month) => new CustomerModel(
    id,
    FirstName,
    LastName,
    Address,
    ZipCode,
    City,
    ServicesNeeded,
    Comment,
    MobilePhoneNumber,
    HomePhoneNumber,
    Email,
    Month
);

function AddCustomer(req, res) 
{
    let nc = Customer(
        null,
        req.body.FirstName,
        req.body.LastName,
        req.body.Address,
        req.body.City,
        req.body.City,
        req.body.ServicesNeeded,
        req.body.Comment,
        req.body.MobilePhoneNumber,
        req.body.HomePhoneNumber,
        req.body.Email,
        req.body.Month
    );

    const q = `CALL girozilla.Add_Customer('${nc.Firstname}', '${nc.LastName}', '${nc.Address}', ${nc.City}, ${nc.ServicesNeeded}, '${nc.Comment}', '${nc.MobilePhoneNumber}', '${nc.HomePhoneNumber}', '${nc.Email}', '${nc.Month}')`;

    pool.query(q, (err, rows) =>
    {
        if (!err)
        {
            if (nc.Firstname == null || !nc.Firstname || nc.Firstname == undefined) 
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nc.LastName == null || !nc.LastName || nc.LastName == undefined) 
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nc.Address == null || nc.ZipCode == null || nc.City == null) 
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nc.Email == null || !nc.Email) 
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (!err && rows.affectedRows > 0) 
            {
                SendHTTPCode(res, 201, `Customer ${nc.Firstname + ' ' + nc.LastName} has been added`, logger);
            }
            else
            {
                SendHTTPCodeMySQL(err, logger, res, 400);
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

function GetAllCustomers(req, res) 
{
    const q = `CALL girozilla.Get_All_Customers()`;

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

function GetCustomerByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_Customer_By_ID(${id})`;

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

function GetCustomerByFirstname(req, res)
{
    let FirstName = req.query.FirstName;

    const q = `CALL girozilla.Get_Customer_By_Firstname('${FirstName}')`;

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

function GetCustomerByLastname(req, res)
{
    let LastName = req.query.LastName;

    const q = `CALL girozilla.Get_Customer_By_Lastname('${LastName}')`;

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

function GetCustomerByAddress(req, res)
{
    let Address = req.query.Address;

    const q = `CALL girozilla.Get_Customer_By_Address('${Address}')`;

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

function GetCustomerByCity(req, res)
{
    let City = req.query.City;

    const q = `CALL girozilla.Get_Customer_By_City('${City}')`;

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

function GetCustomerByZipcode(req, res)
{
    let ZipCode = req.query.ZipCode;

    const q = `CALL girozilla.Get_Customer_By_ZipCode(${ZipCode})`;

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

function EditCustomer(req, res)
{
    let nc = Customer(
        req.body.id,
        req.body.FirstName,
        req.body.LastName,
        req.body.Address,
        req.body.City,
        req.body.City,
        req.body.ServicesNeeded,
        req.body.Comment,
        req.body.MobilePhoneNumber,
        req.body.HomePhoneNumber,
        req.body.Email,
        req.body.Month
    );

    const q = `CALL girozilla.Edit_Customer(${nc.id}, '${nc.Firstname}', '${nc.LastName}', '${nc.Address}', ${nc.City}, ${nc.ServicesNeeded}, '${nc.Comment}', '${nc.MobilePhoneNumber}', '${nc.HomePhoneNumber}', '${nc.Email}', '${nc.Month}')`;

    pool.query(q, (err, rows) => 
    {
        if(isNaN(nc.id))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nc.id == "")
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nc.Firstname == null || !nc.Firstname || nc.Firstname == undefined) 
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (nc.LastName == null || !nc.LastName || nc.LastName == undefined) 
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (nc.Address == null || nc.ZipCode == null || nc.City == null || nc.id == null) 
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (nc.Email == null || !nc.Email) 
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
            SendHTTPCode(res, 200, `Customer with id ${nc.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveCustomer(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_Customer(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, Customer with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    GetCustomerByID,
    GetCustomerByFirstname,
    GetCustomerByLastname,
    GetCustomerByAddress,
    GetCustomerByCity,
    GetCustomerByZipcode,
    AddCustomer,
    EditCustomer,
    RemoveCustomer,
    GetAllCustomers,
};