const fs = require('fs');
const JSZip = require('jszip');
const { promisify } = require('util');
const BinaryXML = require('binary-xml');

const readFile = promisify(fs.readFile);

const readStream = stream => 
  new Promise((resolve, reject) => {
    const list = [];
    stream
      .on('error', reject)
      .on('data', chunk => list.push(chunk))
      .on('end', () => resolve(Buffer.concat(list)))
  });

const read = async filename => {
  const pkg = await readFile(filename);
  const zip = await JSZip.loadAsync(pkg);
  return zip;
};

const manifest = async pkg => {
  const manifest = pkg.file('AndroidManifest.xml');
  const stream = await manifest.nodeStream();
  const data = await readStream(stream);
  const xml = new BinaryXML(data);
  const document = xml.parse();
  return document;
};

module.exports = {
  read,
  manifest
};