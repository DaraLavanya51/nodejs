var http = require('http');

function startserver() {
    function onRequest(req, res) {
        console.log("Request Recieved");
        res.write("Hello from our server module");
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server started on localhost port 8888");
}
exports.startserver = startserver;