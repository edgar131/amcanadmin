var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "/app"),
    entry: {
        app: ["angular", "./app.js"]
    },
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        alias: {

        }
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\angular-.*.js$/, loader: "imports?angular"},
            { test: /\.js$/, loader: 'imports?angular', include: /app/},
            { test: /\.tpl\.html$/, loader: "raw" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less/, loader: "style!css!less" },
            { test: /\.svg$/, loader: "url"},
            { test: /\.ttf$/, loader: "url"},
            { test: /\.woff$/, loader: "url"},
            { test: /\.woff2$/, loader: "url"},
            { test: /\.eot$/, loader: "url"}
        ]
    },
    devServer: {
        proxy: {
            "/admin/competitoredit/searchcompetitors.php": {
                bypass: function(req, res, proxyOptions){
                    if(req.query.id){
                        return '/mock/competitor-edit-mock.json';
                    } else {
                        return '/mock/competitorsearch-mock.json';
                    }

                }
            },
            "/admin/competitoredit/weightclasses.php": {
                bypass: function(req, res, proxyOptions){
                    return '/mock/weightclasses-mock.json';
                }
            },
            "/admin/competitoredit/playerdivisions.php": {
                bypass: function(req, res, proxyOptions){
                    return '/mock/playerdivisions-mock.json'
                }
            },
            "/admin/competitoredit/clubs.php": {
                bypass: function(req, res, proxyOptions){
                    return '/mock/clubs-mock.json'
                }
            }
        }
    }
};