import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserModule } from './user.module';

describe('UserModule', () => {
  let userModule: TestingModule;

  beforeAll(async () => {
    userModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User]), UserModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(userModule).toBeDefined();
  });

  it('should have UserService', () => {
    const userService = userModule.get<UserService>(UserService);
    expect(userService).toBeDefined();
  });

  it('should have UserController', () => {
    const userController = userModule.get<UserController>(UserController);
    expect(userController).toBeDefined();
  });
});