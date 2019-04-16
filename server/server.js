const express = require('express');
const formidable = require('formidable');

const path = require('path');
const hostname = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 8000;

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.post('/upload-background', (req, res) => {
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
      var fileExt = path.extname(file.name);

      file.name = 'uploaded' + fileExt;
      file.path = path.join(__dirname, '..', 'public', 'images', 'uploaded', file.name);
    })
    .on('file', (name, file) => {
      res.write(JSON.stringify({ file: file.name }));
    })
    .on('end', () => {
      res.end();
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up on http://' + hostname + ':' + port);
});
