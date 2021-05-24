
/* eslint-disable consistent-return */
import logger from '../Config/Winston';
import pool from '../Config/Database';
import { CityModel } from '../Models';

let City = (zip, name) => new CityModel({
    zip: zip,
    name: name,
});


function AddCity(req, res) {
    let nc = City(
        req.body.zip,
        req.body.city
    );

    if (nc.zip == null || nc.name == null || !nc.name)
    {
        res.status(405).json({
            Code: 405,
            Message: 'Method Not Allowed, missing data in request.'
        })
    }

    const q = `CALL girozilla.Add_City(${nc.zip}, '${nc.name}')`;

    // Check for errors
    pool.query(q, (err, rows) => 
    {
        if(!err)
        {
            let msg = `City '${nc.name}' has been added with zipcode ${nc.zip}`;

            logger.debug(msg);

            res.status(201).json({
                Message: msg
            });
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            switch(err.code)
            {
                case "ER_BAD_FIELD_ERROR":
                {
                    res.status(400).json({
                        Code: err.code,
                        Number: err.errno,
                        SqlState: err.sqlState,
                        Stack: err.stack
                    })
                    break;
                }
            }
        }
    });
}

function GetCityByID(req, res)
{
    let value = req.query.id;

    const query = `CALL girozilla.Get_City_By_ID(${value})`;

    pool.query(query, (err, rows) =>
    {
        if (value == "" || rows[0].length < 1)
        {
            res.status(204);
            res.end();
            pool.destroy();
        }

        if (!err && rows[0].length > 0)
        {
            res.json(rows[0]);
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.status(400).json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
        }
    });
}

function GetCityByZip(req, res) 
{
    let value = req.query.zip;

    const query = `CALL girozilla.Get_City_By_ZipCode('${value}')`;

    pool.query(query, (err, rows) =>
    {
        if (value == "" || rows[0].length < 1)
        {
            res.status(204);
            res.end();
            pool.destroy();
        }

        if (!err && rows[0].length > 0)
        {
            res.json(rows[0][0]);
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
        }
    });
}

function GetCityByName(req, res) 
{
    let value = req.query.name;

    const query = `CALL girozilla.Get_City_By_Name("${value}")`;

    pool.query(query, (err, rows) =>
    {
        if (value == "" || rows[0].length < 1)
        {
            res.status(204);
            res.end();
            pool.destroy();
        }

        if (!err && rows[0].length > 0)
        {
            res.json(rows[0][0]);
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
        }
    });
}

function EditCity(req, res)
{
    let value = req.body.value;

    let nc = City(
        req.body.zip,
        req.body.city
    );

    const q = `CALL girozilla.Edit_City(${value}, ${nc.zip}, '${nc.name}')`;

    pool.query(q, (err, rows) =>
    {
        
        if (nc.zip == "" || nc.zip == undefined || nc.name == "" || nc.name == undefined || value == "" || value == undefined || rows.affectedRows < 1)
        {
            res.status(405).json({
                Code: 405,
                Message: 'Method Not Allowed, missing data in request.'
            });
            res.end();
            pool.destroy();
        }

        if (!err && rows.affectedRows > 0)
        {
            let msg = `City with id or ZipCode ${value} has been changed`;

            logger.debug(msg);

            res.status(200).json({
                Message: msg
            });
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
        }
    });
}

function RemoveCity (req, res)
{
    let value = req.query.value;

    const query = `CALL girozilla.Remove_City('${value}')`;

    pool.query(query, (err, rows) =>
    {
        if (rows.affectedRows < 1)
        {
            res.status(204);
        }

        if(!err && rows.affectedRows > 0)
        {
            console.log(`Error: ${rows.affectedRows}`)
            let msg = `OK, City with id or Zipcode ${value} has been removed`;

            logger.debug(msg);

            res.status(200).json({
                Message: msg
            });
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.status(400).json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
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
            res.json(rows[0]);
        }
        else
        {
            let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

            logger.error(errorMessage);

            res.json({
                Code: err.code,
                Number: err.errno,
                SqlState: err.sqlState,
                Stack: err.stack
            });
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