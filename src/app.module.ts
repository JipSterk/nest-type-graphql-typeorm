import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { GuestModule } from './guest/guest.module';

class TypeOrmConfig implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const config = await getConnectionOptions(process.env.NODE_ENV);
    return {
      ...config,
      name: 'default',
    };
  }
}

@Module({
  imports: [
    GuestModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
  ],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {
  //   this.runMigrations();
  // }
  // async runMigrations(): Promise<void> {
  //   if (this.connection) {
  //     await this.connection.runMigrations();
  //   }
  // }
}
