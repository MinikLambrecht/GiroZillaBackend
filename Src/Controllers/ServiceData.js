import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { ServiceDataModel } from '../Models';

let ServiceData = (id, CustomerID, ServiceNumber, Chimneys, Pipes, KW, Lighting, Height, Diameter, Length, Type) => new ServiceDataModel(
    id,
    CustomerID,
    ServiceNumber,
    Chimneys,
    Pipes,
    KW,
    Lighting,
    Height,
    Diameter,
    Length,
    Type
);

function AddServiceData(req, res)
{
    let nsd = ServiceData(
        null,
        req.body.CustomerID,
        req.body.ServiceNumber,
        req.body.Chimneys,
        req.body.Pipes,
        req.body.KW,
        req.body.Lighting,
        req.body.Height,
        req.body.Diameter,
        req.body.Length,
        req.body.Type
    );

    const q = `CALL girozilla.Add_ServiceData(${nsd.CustomerID}, ${nsd.ServiceNumber}, ${nsd.Chimneys}, ${nsd.Pipes}, '${nsd.KW}', '${nsd.Lighting}', ${nsd.Height}, ${nsd.Diameter}, '${nsd.Length}', '${nsd.Type}')`;

    pool.query(q, (err, rows) => 
    {
        if(!err)
        {
            if (isNaN(nsd.CustomerID))
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nsd.CustomerID == "")
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `New ServiceData been added`, logger);
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

function GetAllServiceData(req, res)
{
    const q = `CALL girozilla.Get_All_ServiceData()`;

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

function GetServiceDataByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_ServiceData_By_ID(${id})`;

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

function GetServiceDataByCustomerID(req, res)
{
    let CustomerID = req.query.CustomerID;

    const q = `CALL girozilla.Get_ServiceData_By_ID(${CustomerID})`;

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

function EditServiceData(req, res)
{
    let nsd = ServiceData(
        req.body.id,
        req.body.CustomerID,
        req.body.ServiceNumber,
        req.body.Chimneys,
        req.body.Pipes,
        req.body.KW,
        req.body.Lighting,
        req.body.Height,
        req.body.Diameter,
        req.body.Length,
        req.body.Type
    );

    const q = `CALL girozilla.Edit_ServiceData(${nsd.id}, ${nsd.CustomerID}, ${nsd.ServiceNumber}, ${nsd.Chimneys}, ${nsd.Pipes}, '${nsd.KW}', '${nsd.Lighting}', ${nsd.Height}, ${nsd.Diameter}, '${nsd.Length}', '${nsd.Type}')`;

    pool.query(q, (err, rows) => 
    {
        if (isNaN(nsd.id) || isNaN(nsd.CustomerID))
        {
            SendHTTPCode(res, 405);
            res.end();
        }
        else if (nsd.id == "" || nsd.CustomerID == "")
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
            SendHTTPCode(res, 200, `ServiceData with id ${nsd.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveServiceData(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_ServiceData(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, ServiceData with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default{
    AddServiceData,
    GetAllServiceData,
    GetServiceDataByID,
    GetServiceDataByCustomerID,
    EditServiceData,
    RemoveServiceData,
};