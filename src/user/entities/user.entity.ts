import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'date_create',
    type: 'datetimeoffset',
    nullable: false,
  })
  dateCreate: Date;

  @Column({
    name: 'date_update',
    type: 'datetimeoffset',
    nullable: false,
  })
  dateUpdate: Date;

  @Column({ name: 'email', type: 'nvarchar', length: 255, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'nvarchar', length: 255, nullable: false })
  password: string;

  @BeforeInsert()
  createEntity() {
    const currentDate = new Date();
    this.dateCreate = currentDate;
    this.dateUpdate = currentDate;
  }

  @BeforeUpdate()
  updateEntity() {
    const currentDate = new Date();
    this.dateUpdate = currentDate;
  }
}
