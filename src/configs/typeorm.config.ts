import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "oracle",

  host: "10.1.1.241",
  username: "teste",
  password: "teste",
  port: 1521,
  sid: "BDTESTE",
  synchronize: false,
  logging: false,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  autoLoadEntities: true,
};

export const connectionOptions: ConnectionOptions = {
  type: "oracle",
  host: "10.1.1.241",
  username: "teste",
  password: "teste",
  port: 1521,
  sid: "BDTESTE",
  synchronize: false,
  logging: false,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
}