import express from 'express';
import fileUpload from 'express-fileupload';

const APP = express();
const PORT = 3000;

APP.use(express.static('public'));
APP.use(fileUpload());

APP.listen(PORT, () => console.log(`- || APP RUNNING ||--> http://localhost:${PORT}`));

APP.post('/parse', (req, res) => {
  let xmlString = req.files.xmlFile.data.toString();
  xmlString = xmlString.replace(/<.[^>]*>/g, '<span>|</span>').trim();
  res.send(xmlString.replace(/(\r\n|\n|\r|\s)/gm, ''));
});

