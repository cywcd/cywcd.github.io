/// <reference path="..\typings\node\node.d.ts" />
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var types = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
	};
	
function log(m){
	console.log(m);
}
function router(urlstr) {
	var pathstr = url.parse(urlstr).pathname,
		extname = path.extname(pathstr);
	return (__dirname +
				(
				!!extname ?
					pathstr :
					pathstr + (pathstr.slice(-1) == '/' ? '' : '/') + 'index.html'
				)
			).replace(/\\/g, '\/');
}

var server = http.createServer(function (req, res) {

	var serverPath = router(req.url);
	var ext = serverPath.split('.').pop();

	//log(serverPath);
	fs.exists(serverPath, function (exists) {
		if (exists) {		
			res.writeHead(200, { 'Content-Type': types[ext] });
			fs.readFile(serverPath, function (err, data) {
				if (err) throw err;
				//res.write(data);
				res.end(data)
			})
		} else {
			log(serverPath);
			res.writeHead(404, { 'Content-Type': types.html });
			res.end('404');
		}
	})
}).listen(8888,'127.0.0.1')
