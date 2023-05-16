const http = require('http');

const hostname = '127.0.0.1';
const port = '1245';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Contnent-Type', 'text/plain');
  if (res.url == "/"):
    res.send('Hello Holberton School');
  else if (res.url == "/students"):
    res.send('This is the list of our students');
});

app.listen(port, hostname, () => {
});

module.exports = app;
