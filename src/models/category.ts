import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Categories', timestamps: true })
export class Category extends Model<Category> {
  @Column({ type: DataType.STRING, allowNull: false })
  CategoryName?: string;

  @Column({ type: DataType.STRING })
  Description?: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  IsActive?: boolean;
}

