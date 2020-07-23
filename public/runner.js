const FILE_INPUT = document.getElementById('fileInput');
const FILE_BUTTON = document.getElementById('uploadButton');
const TEXT_AREA = document.getElementById('xmlArea');

function showParsedValue (value) {
  TEXT_AREA.innerHTML = value;
}

async function parseXML(xmlFile) {
  let formData = new FormData();
  formData.append('xmlFile', xmlFile, 'file.xml');

  let response = await fetch('http://localhost:3000/parse', {method: 'POST', body: formData});
  let result = await response.text();
  showParsedValue(result);
}

FILE_BUTTON.onclick = () => FILE_INPUT.click();
FILE_INPUT.onclick = () => FILE_INPUT.value = '';
FILE_INPUT.onchange = () => parseXML(FILE_INPUT.files[0]);
