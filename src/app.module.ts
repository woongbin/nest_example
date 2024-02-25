import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { UserEntity } from './user/entity/user.entity';
import { LessonModule } from './lesson/lesson.module';
import { LessonEntity } from './lesson/entity/lesson.entity';
import { PlanModule } from './plan/plan.module';
import { PlanEntity } from './plan/entity/plan.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DB_HOST'],
      port: parseInt(process.env['DB_PORT']),
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_DATABASE'],
      entities: [UserEntity, LessonEntity, PlanEntity],
      synchronize: process.env['APP_ENV'] !== 'production',
    }),
    LessonModule,
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
