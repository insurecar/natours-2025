const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful! 🪿🪿🪿'))
  .catch((err) => console.log('💥💥💥💥', err));

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
