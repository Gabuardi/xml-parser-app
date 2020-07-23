import express from 'express';
import fileUpload from 'express-fileupload';
import xml2js from 'xml2js';

const APP = express();
const PORT = 3000;

APP.use(express.static('public'));
APP.use(fileUpload());

APP.listen(PORT, () => console.log(`- || APP RUNNING ||--> http://localhost:${PORT}`));

APP.post('/file', (req, res) => {
  let xmlString = req.files.filetest.data.toString();
  xmlString = xmlString.replace(/<.[^>]*>/g, '|').trim();
  res.send(xmlString.replace(/(\r\n|\n|\r|\s)/gm, ''));
});

