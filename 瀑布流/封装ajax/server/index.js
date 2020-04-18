var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    console.log(pathName)
    if (pathName == '/data') {
        var page = params.page || 1;
        var pageSize = params.size || 5;
        var data = require('./data.json');
        data = data.filter(function (item, index) {
            return index >= (page - 1) * pageSize && index < page * pageSize;
        });
        response.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-control-Allow-Headers": "xCors",
            'Content-Type': 'application/json'
        });
        response.write(JSON.stringify(data));
        response.end();
    }
}).listen(3000);