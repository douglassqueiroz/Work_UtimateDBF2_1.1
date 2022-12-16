import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entity';


@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
    ){}
  async create(createMusicDto: CreateMusicDto) {
    await this.musicRepository.save(createMusicDto);
    return createMusicDto;
  }

   async findAll(): Promise<Music[]> {
    return await this.musicRepository.find();
  }

  findOne(id: string) {
    const music = this.musicRepository
    .createQueryBuilder('music')
    .select(['music.nome'])
    .getOne();
  return music;
  }

  async update(updateMusicDto: UpdateMusicDto) {
    return this.musicRepository.save(updateMusicDto);
  }

  async remove(musicId: string) {
    const result = await this.musicRepository.delete({id: musicId});
    if (result.affected === 0) {
      throw new NotFoundException('No music was found with the given Id');
    }
  }
}