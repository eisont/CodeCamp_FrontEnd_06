import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id!: String;

  @Column({ type: 'text' })
  seller!: String;

  @Column({ type: 'text' })
  name!: String;

  @Column({ type: 'text' })
  detail!: String;

  @Column({ type: 'text' })
  price!: Number;

  // deleteAt: Date // soft-delete
}
