const PackageAPI = require('./dist/packageapi.min.js');
const tom = new PackageAPI.Tom();
const jean = new PackageAPI.Jean();
console.log(tom.sayHello());//-> Hi, I am Tom.
console.log(jean.sayHello());//-> Hi, I am Jean.
