const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
    // webpack configuration settings
    context: __dirname,
    entry: './src/index.js', // kickoff location for Client
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'isurus-app.bundle.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
       historyApiFallback: true,
       port: 3000,
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: path.resolve( __dirname, 'public/index.html' ),
           filename: 'index.html'
        })
     ]
};