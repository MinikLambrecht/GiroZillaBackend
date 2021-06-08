// IMPORTS ----------------------------------------------------------------

// Settings
import { AppPort, EnvMode } from './Config/Settings';

// Get information from the package.json file
let SoftwareInformation = require('../package.json');
let apiName = SoftwareInformation.name;
let apiVersion = SoftwareInformation.version.split('.')[0];

let APIBasePath = `/${apiName}/v${apiVersion}`;

// Application level imports
import express from 'express';
const path = require('path');

// Security related dependencies
import passport from 'passport';
import helmet from 'helmet';
import cors from 'cors';

// Loggers / Documentation
import morgan from 'morgan';
import logger from './Config/Winston';

import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath() + '/Docs';
const swaggerDoc = require('./SwaggerSpec.json');

// Routes
// import router from './Routes';
import { cityRouter, 
         customerRouter, 
         productRouter,
         routeCustomerRouter, 
         routeRouter, 
         serviceDataRouter, 
         serviceProductRouter, 
         serviceRouter } from "./Routes";

logger.info(`Loading ${EnvMode} environment`);

// ------------------------------------------------------------------------

logger.info('Imports Done');

// CONFIGURATION ----------------------------------------------------------

// Generate Swagger OpenAPI 3.0 docs
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'GiroZilla API',
            version: '1.0.0',
            description: 'GiroZilla API documentation service',
            license: {
                name: 'Apache-2.0',
                url: 'https://spdx.org/licenses/Apache-2.0.html',
            },
            contact: {
                name: 'PyroCoreStudios',
                email: 'MinikGLambrecht@hotmail.com',
            },
        },
        servers: [
            {
                url: `http://localhost:21875${APIBasePath}`,
                description: 'Development Server',
            }
        ],
    },
    apis: [`${__dirname}/Routes/*.js`],
};

if (EnvMode == 'development')
{
    options.definition.servers[0].url = `https://api.pyrocorestudios.dk${APIBasePath}`;
    options.definition.servers[0].description = "Production Server";
}

const swaggerSpecification = swaggerJsdoc(options);

if (EnvMode == 'development')
{
    const fs = require('fs');

    const GenSpec = JSON.stringify(swaggerSpecification, null, 4);
    const Spec = `${__dirname}/SwaggerSpec.json`;

    fs.readFile(Spec, 'utf8', (err, data) => {
        if (err) 
        {
            logger.error('Specification not found, writing new!');

            fs.writeFile(Spec, GenSpec, (err) => {
                if(err)
                {
                    logger.error(`Error writing specification! \n ${err}`);
                }
                else
                {
                    logger.info('New specification created!');
                }
            });
        } 
        else 
        {
            if (JSON.stringify(data) == JSON.stringify(GenSpec))
            {
                logger.info('Specification is up to date!');
            }
            else
            {
                fs.writeFile(Spec, GenSpec, (err) => {
                    if (err) 
                    {
                        logger.error(`Could not update specification! \n ${err}`);
                    }
                    else
                    {
                        logger.info('Specification was updated!');
                    }
                });
            }
        }
    });
}

let corsOptions = {}

// CORS Settings
if (EnvMode == 'production')
{
    corsOptions.origin = `87.61.88.75:${AppPort || 8080}`;
    corsOptions.methods = 'GET, PUT, POST, DELETE';
    corsOptions.preflightContinue = false;
    corsOptions.optionsSuccessStatus = 204;
}
else
{
    corsOptions.origin = `localhost:${AppPort || 8080}`;
    corsOptions.methods = 'GET, PUT, POST, DELETE';
    corsOptions.preflightContinue = false;
    corsOptions.optionsSuccessStatus = 204;
}

// Setup Morgan to log the HTTP requests with Winston
const HTTPLoggingStream = {
    write: (text) =>
    {
        logger.http(text);
    },
};

// Morgan Settings
const MorganOptions = {
    stream: HTTPLoggingStream
};

// ------------------------------------------------------------------------

logger.info('Configuration setup');

// INITIALIZATION ---------------------------------------------------------

// Initialize express
const app = express();

// Enable CORS for all requests
app.use(cors(corsOptions));

// Setup Swagger Documentation Page 
if (EnvMode == 'production')
{
    app.use(`${APIBasePath}/ApiDocs`, express.static(swaggerUiAssetPath));
}
else
{
    app.use(`${APIBasePath}/ApiDocs`, swaggerUI.serve, swaggerUI.setup(swaggerSpecification));
}
/*  */
app.get('/', (req, res) => {
    res.redirect(301, `${APIBasePath}/ApiDocs`);
});

app.get(`${APIBasePath}`, (req, res) => {
    res.redirect(301, `${APIBasePath}/ApiDocs`);
});

app.get('/ApiDocs', (req, res) => {
    res.redirect(301, `${APIBasePath}/ApiDocs`);
});

logger.info('Swagger-UI docs setup');

/* Add Helmet to secure the API with 11 connect style middlewares, 10 because we use Express and don't need to remove the "X-Powered-By" header.
 *
 * Sets the Content-Secutiy-Policy Header (Helps mitigate cross-site scripting attacks).
 * Sets the Expect-CT Header (Helps mitigate misissued SSL Certificates).
 * Sets the Referrer-Policy Header (Controls what information is set in the Referer header).
 * Sets the Strict-Transport-security Header (prefer HTTPS over HTTP).
 * Sets the X-Content-Type-Options to nosniff (mitigates MIME type sniffing).
 * Sets the X-DNS-Prefetch-Control (Helps controlling DNS Prefetching).
 * Sets the X-Download-Options (Mitigates executiong of HTML on the sites context).
 * Sets the X-Frame-Options (Mitigates clickjacking attacks).
 * Sets the X-Permitted-Cross-Domain-Policies (States your domains policy for loading cross-domain content).
 * Removes the X-Powered-By header (Some browsers has this on by default) *DISABLED*.
 * Sets the X-XSS-Protection header to 0.
 */
app.use(helmet(helmet.hidePoweredBy()));

// Parse JSON Bodies into JS Objects
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true,
}));

// Initialize Passport & get the config
app.use(passport.initialize());
require('./Config/Passport')(passport);

// Initialize Morgan
app.use(morgan('[:remote-addr - :remote-user] :method :url (HTTP/:http-version :status) :response-time[2] ms [:user-agent] \r', MorganOptions));

// ------------------------------------------------------------------------

logger.info(`API '${apiName}' has been initialized on '${APIBasePath}'`);

// Setup Base Route & Define Routes ---------------------------------------

// Set the base url
app.set('base', APIBasePath);
logger.info(`Base route set`);

// City Routes
app.use(APIBasePath, cityRouter);
logger.info('City routes defined');

// Customer Routes
app.use(APIBasePath, customerRouter);
logger.info('Customer routes defined');

// Product Routes
app.use(APIBasePath, productRouter);
logger.info('Product routes defined');

// Route Routes
app.use(APIBasePath, routeRouter);
logger.info('Route routes defined');

// Service Routes
app.use(APIBasePath, serviceRouter);
logger.info('Service routes defined');

// RouteCustomer Routes
app.use(APIBasePath, routeCustomerRouter);
logger.info('RouteCustomer routes defined');

// ServiceProduct Routes
app.use(APIBasePath, serviceProductRouter);
logger.info('ServiceProduct routes defined');

// ServiceData Routes
app.use(APIBasePath, serviceDataRouter);
logger.info('ServiceData routes defined');

// ------------------------------------------------------------------------

export default app;