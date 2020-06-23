import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Guest {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ type: 'text' })
  firstName: string;

  @Field(() => String)
  @Column({ type: 'text' })
  lastName: string;

  @Field(() => String)
  @Column({ type: 'text' })
  email: string;

  @Field(() => String)
  @Column({ type: 'text' })
  password: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}
