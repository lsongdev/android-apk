## android-apk [![android-apk](https://img.shields.io/npm/v/android-apk.svg)](https://npmjs.org/android-apk)

> A Simple APK Reader in Node.js

### Installation

```bash
$ npm i android-apk --save
```

### Example

```js
const apk = require('android-apk');

(async () => {

  const pkg = await apk.read('/tmp/demo.apk');
  const manifest = await apk.manifest(pkg);
  console.log(manifest);

})();

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---