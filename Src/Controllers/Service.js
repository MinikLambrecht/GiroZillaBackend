import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { ServiceModel } from '../Models';

let Service = (id, CustomerID, Date, Year, PaymentForm, InvoiceNumber, Paydate, TimesSwept) => new ServiceModel(
    id,
    CustomerID,
    Date,
    Year,
    PaymentForm,
    InvoiceNumber,
    Paydate,
    TimesSwept
);

function AddService(req, res)
{
    let ns = Service(
        null,
        req.body.CustomerID,
        req.body.Date,
        req.body.Year,
        req.body.PaymentForm,
        req.body.InvoiceNumber,
        req.body.Paydate,
        req.body.TimesSwept
    );

    const q = `CALL girozilla.Add_Service(${ns.CustomerID}, '${ns.Date}', '${ns.Year}', '${ns.PaymentForm}', '${ns.InvoiceNumber}', '${ns.Paydate}', ${ns.TimesSwept})`;

    pool.query(q, (err, rows) => {
        if(!err)
        {
            if (isNaN(ns.CustomerID))
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (ns.CustomerID == "")
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `New Service has been added`, logger);
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

function GetAllServices(req, res)
{
    const q = `CALL girozilla.Get_All_Services()`;

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

function GetServiceByID(req, res)
{
    let id = req.query.id;

    const q = ` CALL girozilla.Get_Service_By_ID(${id})`;

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

function GetServiceByCustomerID(req, res)
{
    let CustomerID = req.query.CustomerID;

    const q = ` CALL girozilla.Get_Service_By_CustomerID(${CustomerID})`;

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

function GetServiceByPaymentForm(req, res)
{
    let PaymentForm = req.query.PaymentForm;

    const q = `CALL girozilla.Get_Service_By_PaymentForm('${PaymentForm}')`;

    pool.query(q, (err, rows) =>
    {
        if (PaymentForm == "" || rows[0].length < 1)
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

function GetServiceByInvoiceNumber(req, res)
{
    let InvoiceNumber = req.query.InvoiceNumber;

    const q = `CALL girozilla.Get_Service_By_InvoiceNumber('${InvoiceNumber}')`;

    pool.query(q, (err, rows) =>
    {
        if (InvoiceNumber == "" || rows[0].length < 1)
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

function GetServiceByTimesSwept(req, res)
{
    let TimesSwept = req.query.TimesSwept;

    const q = ` CALL girozilla.Get_Service_By_TimesSwept(${TimesSwept})`;

    pool.query(q, (err, rows) =>
    {
        if(isNaN(TimesSwept))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (TimesSwept == "" || rows[0].length < 1)
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

function EditService(req, res)
{
    let ns = Service(
        req.body.id,
        req.body.CustomerID,
        req.body.Date,
        req.body.Year,
        req.body.PaymentForm,
        req.body.InvoiceNumber,
        req.body.Paydate,
        req.body.TimesSwept
    );

    console.log(ns);

    const q = `CALL girozilla.Edit_Service(${ns.id}, ${ns.CustomerID}, '${ns.Date}', '${ns.Year}', '${ns.PaymentForm}', '${ns.InvoiceNumber}', '${ns.Paydate}', ${ns.TimesSwept})`;

    pool.query(q, (err, rows) => 
    {
        if (isNaN(ns.id) || isNaN(ns.CustomerID))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (ns.id == "" || ns.CustomerID == "")
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
            SendHTTPCode(res, 200, `Service with id ${ns.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveService(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_Service(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, Service with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    AddService,
    GetAllServices,
    GetServiceByID,
    GetServiceByCustomerID,
    GetServiceByPaymentForm,
    GetServiceByInvoiceNumber,
    GetServiceByTimesSwept,
    EditService,
    RemoveService,
};