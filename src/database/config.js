import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB}:${process.env.DB_PWD}@cluster0.eryz6zq.mongodb.net/lvlup`,
      {},
    );
    console.log('Connected to DB');
  } catch (error) {
    console.error('error', error);
  }
};
