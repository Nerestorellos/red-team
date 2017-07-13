webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');


webpackConfig = {
    context: __dirname,
    entry: {
        bundle: __dirname + '/app/app.jsx'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/app/build',
        library: '[name]',
    },
    devServer: {
      contentBase: path.join(__dirname, "/"),
      compress: true,
      port: 3000
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!resolve-url!sass-loader?sourceMap'
              })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports = webpackConfig;
