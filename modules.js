const fs = require('fs');
const os = require('os');

fs.writeFileSync("dummytxt","trying with modules")
// core modules which is already present in node no need to create our own


const {log}=require('console')
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
console.log(process.cwd());
