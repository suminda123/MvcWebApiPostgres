/**
 * Created by earl.suminda on 10/09/2015.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/Scripts/app",
    entry: "./js/app.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/Content/dist/",
        publicPath: "/Content/dist/"
    },
    plugins: [
        new ExtractTextPlugin("site.css", { allChunks: true })
    ],
    resolve:{
        extensions: ['','.js','.jsx', '.css', '.less', '.html']
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
            {test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
        ]
    }
}