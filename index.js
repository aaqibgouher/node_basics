const http = require('http');
const path = require('path');
const fs = require('fs');
const persons = require('./person');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
    //         if(err) res.end(err);
    //         else{
    //             res.writeHeader(200, { 'Content-Type': 'text/html' });
    //             res.end(content);
    //         }
    //     })        
    // }

    // if(req.url === '/api/persons') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(persons));
    // }

    let route = req.url;
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : route + '.html');
    let ext = path.extname(filePath);

    let contentType = 'text/html';

    switch(ext) {
        case '.js':
            contentType: 'text/javascript';
            break;
        case '.css':
            contentType: 'text/css';
            break;
    }

    fs.readFile(filePath, 'utf8', (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', 'error.html'), 'utf8', (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                })
            }else {
                res.writeHead(500);
                res.end(`server error found: ${err.code}`);
            }
        }else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    })
});

const PORT = 5000;
server.listen(PORT, () => console.log(`server is running at port ${PORT}`));