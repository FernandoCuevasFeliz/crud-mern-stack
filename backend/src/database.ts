import { connect, ConnectionOptions } from 'mongoose';

import { mongoUri } from './config';

const mongoOpts: ConnectionOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbInit = async () => {
  try {
    await connect(mongoUri, mongoOpts);
    console.log('DB is connected');
  } catch (error) {
    console.error(error);
  }
};

export default dbInit;
