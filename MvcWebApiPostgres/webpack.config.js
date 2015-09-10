/**
 * Created by earl.suminda on 10/09/2015.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/Scripts/app",
    entry: "./js/app.jsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/Content/dist/",
        publicPath: "/Content/dist/"
    },
    plugins: [
        new ExtractTextPlugin("site.css", { allChunks: true })
    ],
    resolve:{
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
        ]
    }
}