
import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { UsersService } from './users.service';
import {UserType} from './dto/create-user-dto';
import { CreateUserInput } from './Inputs/create-user-input';
import { DeleteUserInput } from './Inputs/delete-user-input';
import { UpdateUserInput } from './Inputs/update-user-input';
import { GetUserInput } from './dto/Args/get-user-input';
@Resolver()
export class UsersResolver {
  constructor(
      private readonly usersService: UsersService,
  ){}
    @Query(() => String)
  async hello(){
      return 'hello';
  }
  @Query(() =>[UserType])
   getUsers(){
      return this.usersService.getAllUsers();
  }
  @Query(()=>UserType)
  getUser(@Args('input') input:GetUserInput){
    return this.usersService.getUserById(input)
  }
  @Mutation(()=> UserType)
   createUser(@Args('input') input: CreateUserInput){
      return this.usersService.create(input);
  }
  @Mutation(()=> UserType)
   deleteUser(@Args('input') input: DeleteUserInput){
    return  this.usersService.deleteUser(input);
  }
@Mutation(()=>UserType)
updateUser(@Args('input') input: UpdateUserInput){
  return this.usersService.updateUser(input);
}

  
}
