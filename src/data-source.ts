import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, '/entities/**/*.{ts, js}')],
  migrations: [path.join(__dirname, '/migrations/**/*.{ts, js}')],
});
