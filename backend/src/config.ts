import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 5000;
export const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/db_test';
