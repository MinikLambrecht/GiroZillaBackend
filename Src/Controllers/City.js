/* eslint-disable consistent-return */
import logger from '../Config/Winston';
import pool from '../Config/Database';
import { CityModel } from '../Models';

let City = (zip, name) => new CityModel({
    zip: zip,
    name: name,
});

// Implement Non Null Measures
function AddCity(req, res) {
    let nc = City(
        req.body.zip,
        req.body.city
    );

    const q = `CALL girozilla.Add_City(${nc.zip}, '${nc.name}')`;

    // Check for errors
    pool.query(q, (err, rows) => 
    {
        if(!err)
        {
            let msg = `City '${nc.name}' has been added with zipcode ${nc.zip}`;

            logger.debug(msg);

            res.json({
                Message: msg
            });
        }

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

function GetCityByID(req, res)
{
    let value = req.query.id;

    const query = `CALL girozilla.Get_City_By_ID(${value})`;

    pool.query(query, (err, rows) =>
    {
        if (!err && rows[0].length > 0)
        {
            res.json(rows[0][0]);
        }

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

function GetCityByZip(req, res) 
{
    let value = req.query.zip;

    const query = `CALL girozilla.Get_City_By_ZipCode('${value}')`;

    pool.query(query, (err, rows) =>
    {
        if (!err && rows[0].length > 0)
        {
            res.json(rows[0][0]);
        }

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

function GetCityByName(req, res) 
{
    let value = req.query.name;

    const query = `CALL girozilla.Get_City_By_Name("${value}")`;

    pool.query(query, (err, rows) =>
    {
        if (!err && rows[0].length > 0)
        {
            res.json(rows[0][0]);
        }

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

function EditCity(req, res)
{
    const q = `CALL Get_User_By_Email(?)`;

    // Find the user by Email
    // eslint-disable-next-line consistent-return
    pool.query(q, email, (error, results) =>
    {
        if (!error)
        {
            
        }

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

function RemoveCity (req, res)
{
    // If no user is currently logged in
    // return 404
    if (!req.session.user)
    {
        logger.debug('No user is logged in');

        return res.status(404).json({
            nouser: 'No user is logged in',
        });
    }

    // Make a copy of the username logging out.
    const tempName = new UserModel(req.session.user).name;

    // Destory the users sessions logging them out
    req.session.destroy(function(){
        logger.debug(`${tempName} has logged out`)

        return res.status(200).json({
            loggedout: `${tempName} has been logged out`,
        });
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

        let errorMessage = `${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`;

        logger.error(errorMessage);

        res.json({
            Code: err.code,
            Number: err.errno,
            SqlState: err.sqlState,
            Stack: err.stack
        });
    });
}

export default {
    GetCityByID,
    GetCityByZip,
    GetCityByName,
    AddCity,
    // EditCity,
    // RemoveCity,
    GetAllCities,
};