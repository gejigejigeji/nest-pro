import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  @Exclude()
  age: number
}