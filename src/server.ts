import app from './app';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database is running!!!');
    app.listen(PORT, () => {
      console.log(`App is running!!!\nhttp://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
