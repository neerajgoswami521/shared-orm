import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Category } from '../models/category';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234',
  database: 'MyStore',
  models: [Product, Category], // Add all models here
});

export default sequelize;
