import { JWTSecret } from './Settings';
import { CustomerModel } from '../Models';
import pool from './Database';
import logger from './Winston';

const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const opts = {
};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWTSecret;

module.exports = (passport) =>
{
    passport.use(
        // eslint-disable-next-line camelcase
        new JwtStrategy(opts, (jwt_payload, done) =>
        {
            // eslint-disable-next-line consistent-return
            pool.query(`SELECT * from customers WHERE Customer_ID='${jwt_payload.id}'`, (err, rows) =>
            {
                const customer = new CustomerModel({
                    id: rows[0].id,
                    firstname: rows[0].firstname,
                    lastname: rows[0].lastname,
                    address: rows[0].address,
                    zipcode: rows[0].zipcode,
                    city: rows[0].city,
                    servicesneeded: rows[0].servicesneeded,
                    comment: rows[0].comment,
                    mobile: rows[0].mobile,
                    home: rows[0].home,
                    email: rows[0].email,
                    month: rows[0].month,
                });

                if (!err)
                {
                    if (rows.length > 0)
                    {
                        return done(null, customer);
                    }

                    return done(null, false);
                }

                logger.error(`${err.code} ${err.errno} (${err.sqlState}): ${err.stack}`);
            });
        }),
    );
};