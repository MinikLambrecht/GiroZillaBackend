// IMPORTS ----------------------------------------------------------------

// Settings
import { AppPort, JWTSecret } from './Config/Settings';

// Application level imports
import express from 'express';

// Security related dependencies
import passport from 'passport';
import helmet from 'helmet';
import cors from 'cors';

// Loggers / Documentation
import morgan from 'morgan';
import logger from './Config/Winston';

// Routes
import router from './Routes';

// ------------------------------------------------------------------------

logger.debug('Imports Done');

// CONFIGURATION ----------------------------------------------------------

// CORS Settings
const corsOptions = {
    origin: `localhost:${AppPort || 8080}`,
    methods: 'GET, PUT, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

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

logger.debug('Configuration setup');

// INITIALIZATION ---------------------------------------------------------

// Initialize express
const app = express();

// Enable CORS for all requests
app.use(cors(corsOptions));

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

// Get information from the package.json file
let SoftwareInformation = require('../package.json');
let apiName = SoftwareInformation.name;
let apiVersion = SoftwareInformation.version.split('.')[0];

// Set the base url & define the routes
app.set('base', `/${apiName}/api/v${apiVersion}`);
app.use(`/${apiName}/api/v${apiVersion}`, router);

// ------------------------------------------------------------------------

logger.debug(`API '${apiName}' has been initialized on '/${apiName}/api/v${apiVersion}'`);

export default app;