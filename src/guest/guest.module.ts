import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './guest.entity';
import { GuestResolver } from './guest.resolver';
import { GuestsService } from './guest.service';

@Module({
  imports: [TypeOrmModule.forFeature([Guest])],
  providers: [GuestResolver, GuestsService],
})
export class GuestModule {}
