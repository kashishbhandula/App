const port = 3000;
const http = require('http');
const fs = require('fs');
const HttpServer = http.createServer(requestHandler);
function requestHandler(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>Http Server Working Fine</h1>');
    // fs.readFile('', function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     return res.end(data);
    // });

}
HttpServer.listen(port, function (err) {
    if (err) console.log("Server is not listening");
    console.log("Server is listening on port:", port);

});