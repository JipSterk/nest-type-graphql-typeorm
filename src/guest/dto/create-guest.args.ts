import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateGuestArgs {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
