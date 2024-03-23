import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(userId: string) {
    return await this.userRepository.getUser(userId);
  }

  async getUsers() {
    return await this.userRepository.getUsers();
  }

  async store(name: string, phoneNumber: string) {
    return await this.userRepository.store(name, phoneNumber);
  }
}
