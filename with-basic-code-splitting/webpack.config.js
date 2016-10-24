var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
module.exports = function(env) {
    return {
        entry: './index.js',
        output: {
            filename: '[hash].bundle.js',
            path: './dist'
        },
        // module: {
        //     rules : [{
        //         test: /.js$/,
        //         loader: 'babel-loader',
        //         query: {
        //             "presets": ["es2015"]
        //         },
        //         exclude: /node_modules/ 
        //     }]
        // },
        devtool: 'source-map',
        context: path.resolve(__dirname),
        plugins: [
            new HTMLWebpackPlugin({
                filename:'index.html'
            }),
            new CommonsChunkPlugin({
                name: 'commons',
                filename: '[hash].commons.js',
                minChunks: 2,
                async: true
            })
        ]
    }
}