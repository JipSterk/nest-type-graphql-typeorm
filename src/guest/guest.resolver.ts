import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGuestArgs } from './dto/create-guest.args';
import { Guest } from './guest.entity';
import { GuestsService } from './guest.service';

@Resolver(Guest)
export class GuestResolver {
  constructor(private readonly guestsService: GuestsService) {}

  @Query(() => Guest)
  viewer(): string {
    return 'hello';
  }

  @Mutation(() => Guest)
  async createGuest(@Args() createGuestArgs: CreateGuestArgs): Promise<Guest> {
    return this.guestsService.createGuest(createGuestArgs);
  }
}
