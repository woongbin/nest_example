import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(userId: string) {
    return this.userRepository.getUser(userId);
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }

  async store(name: string, phoneNumber: string) {
    return this.userRepository.store(name, phoneNumber);
  }
}
