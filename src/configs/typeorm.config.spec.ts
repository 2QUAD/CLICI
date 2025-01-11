import { typeOrmConfig, connectionOptions } from './typeorm.config';

describe('TypeORM Configurations', () => {
  it('deve ter configurações typeOrmConfig corretas', () => {
    expect(typeOrmConfig).toEqual({
      type: "oracle",
      host: "10.1.1.241",
      username: "TESTE",
      password: "TESTE",
      port: 1521,
      sid: "BDTESTE",
      synchronize: false,
      logging: false,
      entities: [expect.stringContaining('/../**/*.entity.{js,ts}')],
      autoLoadEntities: true,
    });
  });

  it('deve ter configurações corretas de connectionOptions', () => {
    expect(connectionOptions).toEqual({
      type: "oracle",
      host: "10.1.1.241",
      username: "TESTE",
      password: "TESTE",
      port: 1521,
      sid: "BDTESTE",
      synchronize: false,
      logging: false,
      entities: [expect.stringContaining('/../**/*.entity.{js,ts}')],
    });
  });
});