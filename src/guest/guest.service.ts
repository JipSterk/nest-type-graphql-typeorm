import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateGuestArgs } from './dto/create-guest.args';
import { Guest } from './guest.entity';

@Injectable()
export class GuestsService {
  public constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
  ) {}

  async findGuest(email: string): Promise<Guest> {
    return this.guestRepository.findOne({ where: { email } });
  }

  async createGuest({
    firstName,
    lastName,
    email,
    password,
  }: CreateGuestArgs): Promise<Guest> {
    if (await this.findGuest(email)) {
      throw new ApolloError('existing Guest');
    }

    const hash = await bcrypt.hash(password, 12);

    return this.guestRepository.save({
      firstName,
      lastName,
      password: hash,
      email,
    });
  }
}
