const fs = require('fs');
const gdUsers = JSON.parse(fs.readFileSync(`${__dirname}/gdUsers.json`));

console.log('LENGTH_______', gdUsers.length);
