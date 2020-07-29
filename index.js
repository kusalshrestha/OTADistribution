const http = require('http');
const fs = require('fs');

const express = require('express');
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Whoops! File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
})

app.use('/', router)
app.use('/app', express.static(__dirname + '/resource'))
app.listen(3000, () => {
    console.log(`Server running at 3000`);
});
