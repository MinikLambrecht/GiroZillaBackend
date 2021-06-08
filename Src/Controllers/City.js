import logger from '../Config/Winston';
import pool from '../Config/Database';
import { SendHTTPCode, SendHTTPCodeMySQL, SendHTTPCodeResultArray, SendHTTPCodeResultObject } from '../Config/HttpCodes';
import { CityModel } from '../Models';

let City = (id, ZipCode, City) => new CityModel(
    id,
    ZipCode,
    City
);

function AddCity(req, res) 
{
    let nc = City(
        null,
        req.body.ZipCode,
        req.body.City
    );

    const q = `CALL girozilla.Add_City(${nc.ZipCode}, '${nc.City}')`;

    // Check for errors
    pool.query(q, (err, rows) => 
    {
        if(!err)
        {
            if (nc.City == null || !nc.City || nc.City == undefined)
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (nc.ZipCode == null)
            {
                SendHTTPCode(res, 405);
                res.end();
            }
            else if (!err && rows.affectedRows > 0)
            {
                SendHTTPCode(res, 201, `City '${nc.City}' has been added with zipcode ${nc.ZipCode}`, logger);
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
                        SendHTTPCodeMySQL(err, logger, res, 405);
                        break;
                    }
                case "ER_DUP_ENTRY":
                    {
                        SendHTTPCodeMySQL(err, logger, res, 403);
                        break;
                    }
            }
        }
    });
}

function GetAllCities (req, res)
{    
    const query = `CALL girozilla.Get_All_Cities()`;

    pool.query(query, (err, rows) =>
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

function GetCityByID(req, res)
{
    let id = req.query.id;

    const query = `CALL girozilla.Get_City_By_ID(${id})`;

    pool.query(query, (err, rows) =>
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

function GetCityByZip(req, res)
{
    let ZipCode = req.query.ZipCode;

    const query = `CALL girozilla.Get_City_By_ZipCode('${ZipCode}')`;

    pool.query(query, (err, rows) =>
    {
        if(isNaN(ZipCode))
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

function GetCityByName(req, res)
{
    let City = req.query.City;

    const query = `CALL girozilla.Get_City_By_Name("${City}")`;

    pool.query(query, (err, rows) =>
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

function EditCity(req, res)
{
    let nc = City(
        req.body.id,
        req.body.ZipCode,
        req.body.City
    );

    const q = `CALL girozilla.Edit_City(${nc.id}, ${nc.ZipCode}, '${nc.City}')`;

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
        else if (nc.City == null || !nc.city || nc.City == undefined )
        {
            SendHTTPCode(res, 204);
            res.end();
        }
        else if (nc.ZipCode == null || nc.id == null)
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
            SendHTTPCode(res, 200, `City with id or ZipCode ${nc.id} has been changed`, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

function RemoveCity (req, res)
{
    let id = req.query.id;

    const query = `CALL girozilla.Remove_City('${id}')`;

    pool.query(query, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            SendHTTPCode(res, 204);
        }
        else if(!err && rows.affectedRows > 0)
        {
            let msg = `OK, City with id or Zipcode ${id} has been removed`;

            SendHTTPCode(res, 200, msg, logger);
        }
        else
        {
            SendHTTPCodeMySQL(err, logger, res, 400);
        }
    });
}

export default {
    GetCityByID,
    GetCityByZip,
    GetCityByName,
    AddCity,
    EditCity,
    RemoveCity,
    GetAllCities,
};