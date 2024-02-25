import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async getUsers() {
    return await this.repository.find();
  }

  async store(name: string, phoneNumber: string) {
    return await this.repository.save({
      name,
      phoneNumber,
    });
  }

  async getUser(userId: string) {
    return await this.repository.findOne({
      where: {
        id: userId,
      },
    });
  }
}
