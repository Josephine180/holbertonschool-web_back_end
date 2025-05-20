const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req.url;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.write('Hello Holberton School! ');
  } else if (url === '/students') {
    res.write('This is the list of our students');
    countStudents(database)
      .then((data) => {
        res.end(data); // ajoute les lignes retournées par countStudents
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
