// IMPORTS ----------------------------------------------------------------

// Settings
import { AppPort, EnvMode } from './Config/Settings';

// Get information from the package.json file
let SoftwareInformation = require('../package.json');
let apiName = SoftwareInformation.name;
let apiVersion = SoftwareInformation.version.split('.')[0];

// Application level imports
import express from 'express';

// Security related dependencies
import passport from 'passport';
import helmet from 'helmet';
import cors from 'cors';

// Loggers / Documentation
import morgan from 'morgan';
import logger from './Config/Winston';
import swaggerUI from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Routes
// import router from './Routes';
import { cityRouter } from "./Routes";

// ------------------------------------------------------------------------

logger.info('Imports Done');

// CONFIGURATION ----------------------------------------------------------

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }

            results[name].push(net.address);
        }
    }
}

let ip;

if (EnvMode == 'production')
{
    ip = '87.61.88.75';
}
else
{
    results['wlp6s0'][0];
}


// Setup Swagger OpenAPI 3.0 docs
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
        host: `${ip}:21875`,
        basePath: `/${apiName}/api/v${apiVersion}`,
        servers: [
            {
                url: 'http://localhost:21875/girozillabackend/api/v1',
                description: 'Development Server',
            },
            {
                url: 'http://87.61.88.75:21875/girozillabackend/api/v1',
                description: 'Production Server',
            }
        ],
    },
    apis: [`${__dirname}/Routes/*.js`],
};

const swaggerSpecification = swaggerJsdoc(options);

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

    let obj = JSON.parse(data);

    logger.info(`Swagger host setup on '${obj.host}'`);
    logger.info(`Swagger basePath setup on '${obj.basePath}'`);
});


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
app.use(`/${apiName}/api/v${apiVersion}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerSpecification));
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

logger.info(`API '${apiName}' has been initialized on '/${apiName}/api/v${apiVersion}'`);

// Setup Base Route & Define Routes ---------------------------------------

// Set the base url
app.set('base', `/${apiName}/api/v${apiVersion}`);
logger.info(`Base route set`);

// City Routes
app.use(`/${apiName}/api/v${apiVersion}`, cityRouter);
logger.info(`City routes defined`);

// ------------------------------------------------------------------------

export default app;