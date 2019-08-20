const path = require('path');

module.exports = {
    // webpack configuration settings
    entry: './src/index.js', // kickoff location for Client
    output: {
        path: `${__dirname}/dist`,
        filename: 'isurus-app.bundle.js',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
};