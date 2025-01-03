const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

require('dotenv').config({ path: './config.env' });

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
