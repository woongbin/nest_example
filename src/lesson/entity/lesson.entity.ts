import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LessonTypeEnum } from '../enum/lesson-type.enum';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('lessons')
export class LessonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: LessonTypeEnum,
  })
  type: LessonTypeEnum;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserEntity, (user) => user.id, { nullable: false })
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
