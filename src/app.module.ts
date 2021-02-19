import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {GraphQLModule} from '@nestjs/graphql';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }), UsersModule,
MongooseModule.forRoot('mongodb://localhost/test')
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
