const apk = require('..');

(async () => {

  const pkg = await apk.read('/tmp/demo.apk');
  const manifest = await apk.manifest(pkg);
  console.log(manifest);

})();