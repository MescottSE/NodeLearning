import http from 'http';
import fs from 'fs';

const Port = 8000;

const server = http.createServer((req, res) => {
    const indexFilename = './index.html';

    fs.readFile(indexFilename, 'utf8', (error, data) => {
        if(error){
            fs.readFile('./errorPage.html', 'utf8', (error2, errorPage) => {
                if(error2){
                    res.writeHead(500, 'Content-Type: text/plain');
                    res.end('Error Loading: errorPage.html');
                }else{
                    const modifiedErrorPage = errorPage.replace('{{errorFilename}}', `"${indexFilename}"`);
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    res.end(modifiedErrorPage);
                }
            });
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});


server.listen(Port, () => {
    console.log(`Server Running on Port: ${Port}`);
});
