require('dotenv').config();

const mongo_username = process.env.MONGO_USR;
const mongo_pass = process.env.MONGO_PASS;

const mongoose = require('mongoose');
const app = require('./app');
const uri = `mongodb+srv://${mongo_username}:${mongo_pass}@todolistdb.cyltuzv.mongodb.net/?retryWrites=true&w=majority`
const port = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

connect()
  .then(() => app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  }))
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
