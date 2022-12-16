import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './music/entities/music.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot(
    { 
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'trabalho_final',
    entities: [Music],
    synchronize: true,
    logging: true,
    }
  ),
    MusicModule,

],
  controllers: [],
  providers: [],
})
export class AppModule {}

