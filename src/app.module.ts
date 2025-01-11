import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      autoLoadEntities: true, // Carrega automaticamente entidades registradas
      synchronize: true, // Sincroniza automaticamente as entidades no banco (use com cuidado em produção)
    }),
  ],
})
export class AppModule {}
