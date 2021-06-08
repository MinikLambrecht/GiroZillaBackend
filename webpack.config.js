const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                test: /\.yaml$/,
                use: [
                    { 
                        loader: 
                        'yaml-loader' 
                    }
                ]
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'node_modules/swagger-ui-dist/'),
                    globOptions: {
                        test: /\.(js|css|html|png)$/i,
                        ignore: [
                            path.resolve(__dirname, 'node_modules/swagger-ui-dist/index.js'),
                            path.resolve(__dirname, 'node_modules/swagger-ui-dist/absolute-path.js'),
                            path.resolve(__dirname, 'node_modules/swagger-ui-dist/*.map'),
                            path.resolve(__dirname, 'node_modules/swagger-ui-dist/*.md'),
                            path.resolve(__dirname, 'node_modules/swagger-ui-dist/*.json')
                        ], 
                    },
                    to: 'Docs'
                },
                {
                    from: path.resolve(__dirname, 'Src/SwaggerSpec.json'),
                    to: 'Docs'
                }
            ],
        }),
    ],
};