import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './userSchema';
import { UsersService } from './users.service';

@Module({
    imports: [MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
    providers:[UsersResolver, UsersService]
})
export class UsersModule {}
