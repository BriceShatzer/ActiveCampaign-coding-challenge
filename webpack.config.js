const path = require('path');
const webpack = require("webpack");
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        hotOnly: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    resolve: { 
        extensions: ["*", ".js", ".jsx"],
        alias: {
            'react-dom': '@hot-loader/react-dom',
          },
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    }
};