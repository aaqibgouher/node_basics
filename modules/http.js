const http = require('http');

// create server
http.createServer((req, res) => {
    res.write('Hello this is Aaqib');
    res.end();
}).listen(3000, () => console.log('server started running on port 3000 ..'));