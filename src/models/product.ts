import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from './category';

@Table({ tableName: 'Products', timestamps: true })
export class Product extends Model<Product> {
  @Column({ type: DataType.STRING, allowNull: false })
  ProductName?: string;

  @Column({ type: DataType.STRING })
  Description?: string;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  Price?: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  StockQuantity?: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  CategoryId?: number; 
}
