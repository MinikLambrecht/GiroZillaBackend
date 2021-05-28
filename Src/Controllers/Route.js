import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { RouteModel } from '../Models';

let Route = (id, Name, Description, Month, Year) => new RouteModel(
    id,
    Name,
    Description,
    Month,
    Year
);

function AddRoute(req, res)
{
    let nr = Route(
        null,
        req.body.Name,
        req.body.Description,
        req.body.Month,
        req.body.Year
    );

    const q = `CALL girozilla.Add_Route('${nr.Name}', '${nr.Description}', '${nr.Month}', '${nr.Year}')`;

    pool.query(q, (err, rows) => {
        if(!err)
        {
            if (nr.Name == null || !nr.Name || nr.Name == undefined)
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else
            {
                SendHTTPCode(res, 201, `${nr.Name} Has been added to routes`, logger);
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

function GetAllRoutes(req, res)
{
    const q = `CALL girozilla.Get_All_Routes()`;

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

function GetRouteByID(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Get_Route_By_ID(${id})`;

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

function GetRouteByName(req, res)
{
    let Name = req.query.Name;

    const q = `CALL girozilla.Get_Route_By_Name('${Name}')`;

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

function EditRoute(req, res)
{
    let nr = Route(
        req.body.id,
        req.body.Name,
        req.body.Description,
        req.body.Month,
        req.body.Year
    );

    const q = `CALL girozilla.Edit_Route(${nr.id}, '${nr.Name}', '${nr.Description}', '${nr.Month}', '${nr.Year}')`;

    pool.query(q, (err, rows) => 
    {
        if (nr.Name == null || !nr.Name || nr.Name == undefined) 
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
            SendHTTPCode(res, 200, `Route with id ${nr.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveRoute(req, res)
{
    let id = req.query.id;

    const q = `CALL girozilla.Remove_Route(${id})`;

    pool.query(q, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            SendHTTPCode(res, 200, `OK, Route with id ${id} has been removed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    AddRoute,
    GetAllRoutes,
    GetRouteByID,
    GetRouteByName,
    EditRoute,
    RemoveRoute,
};
