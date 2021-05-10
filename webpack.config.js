const path = require('path');

const BUILD_DIR = path.join(__dirname, '/Build');
const SRC_DIR = path.join(__dirname, '/Src');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
    name: 'GiroZillaAPI',
    target: 'node',
    entry: path.join(SRC_DIR, '/Bin/www.js'),
    mode: NODE_ENV,
    output: {
        path: BUILD_DIR,
        filename: 'GiroZillaAPI.js',
    },
    externals: [
        path.join(SRC_DIR, 'Logs'),
    ],
    resolve: {
        extensions: [ 
            '.js'
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                use: 'babel-loader',
            },
            {
                test: /\.json$/,
                include: SRC_DIR,
                use: 'json-loader',
            },
        ],
    },
};