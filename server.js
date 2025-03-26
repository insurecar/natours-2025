const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥💥💥', err);
  process.exit(1);
});

// Перевірка змінних середовища
if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    'DATABASE or DATABASE_PASSWORD is missing from environment variables'
  );
}

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful! 🪿🪿🪿'))
  .catch((err) => {
    console.error('DB connection failed! 💥', err);
    process.exit(1);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥💥💥', err);
  server.close(() => process.exit(1));
});
