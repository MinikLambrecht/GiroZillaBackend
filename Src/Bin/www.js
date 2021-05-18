/**
 * Module dependencies.
 */
import http from 'http';
import app from '../main';
import logger from '../Config/Winston';

// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// const APIinfo = require('../../package.json');

require('dotenv').config();

/*
 * Swagger UI Options
 */
// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: APIinfo.name,
//             version: APIinfo.version,
//             description: '',
//         license: {
//             name: APIInfo.license,
//             url: 'https://spdx.org/licenses/Apache-2.0.html',
//         },
//         contact: {
//             name: "PyroCoreStudios",
//             url: "https://PyroCoreStudios.dk",
//             email: "MinikGLambrecht@hotmail.com",
//         },
//     },
//     servers: [
//       {
//         url: `localhost:21875/${APIinfo.name}/api/v${APIinfo.version.split('.')[0]}`,
//       },
//     ],
//   },
//   apis: ["./routes/books.js"],
// };

// const specs = swaggerJsdoc(options);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) =>
{
    const port = parseInt(val, 10);

    if (Number.isNaN(port))
    {
        // named pipe
        return val;
    }
    if (port >= 0)
    {
        // port number
        return port;
    }

    return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server 'error' event.
 */
const onError = (error) =>
{
    if (error.syscall !== 'listen')
    {
        logger.error(error);
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code)
    {
    case 'EACCES':
        logger.warn(`${bind} requires elevated privileges`);
        process.exit(1);
        break;

    case 'EADDRINUSE':
        logger.warn(`${bind} is already in use`);
        process.exit(1);
        break;

    default:
        logger.error(error);
        break;
    }
};

/**
 * Event listener for HTTP server 'listening' event.
 */
const onListening = () =>
{
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    logger.debug(`Listening on ${bind}`);
};

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);