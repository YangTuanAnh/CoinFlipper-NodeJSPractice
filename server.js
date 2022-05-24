const http = require('http');
const fs = require('fs')
const url = require('url');

const server = http.createServer((req, res) =>
{
  if (req.url == '/')
  {
    fs.readFile('index.html', (err, data) =>
    {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (req.url == '/api')
  {
    const message = Math.random() <= 0.5 ? 'Heads' : 'Tails';
    const status = { 'status': message };
    res.writeHead(200, { 'Content-Type': 'application/JSON' });
    res.end(JSON.stringify(status));
  }//else if

  else if (req.url == '/css/style.css')
  {
    fs.readFile('css/style.css', function (err, data)
    {
      res.write(data);
      res.end();
    });
  } else if (req.url == '/js/main.js')
  {
    fs.readFile('js/main.js', function (err, data)
    {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
