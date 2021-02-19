import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import {User} from './UserInterface';
import {CreateUserInput} from './Inputs/create-user-input';
import { DeleteUserInput } from './Inputs/delete-user-input';
import { UpdateUserInput } from './Inputs/update-user-input';
import { GetUserInput } from './dto/Args/get-user-input';
@Injectable()
export class UsersService {
    constructor (@InjectModel('User') private readonly userModel: Model<User>){}
   create(userInput: CreateUserInput){
      const createdUser = new this.userModel(userInput);
      return  createdUser.save();
  }
     getAllUsers(){
      return  this.userModel.find().exec();
      
  }
  getUserById(getUserData:GetUserInput){
    return this.userModel.findById(getUserData.userId).exec();
    
    
  }
  updateUser(updateUserData: UpdateUserInput){
    return this.userModel.findByIdAndUpdate(updateUserData.userId, updateUserData, {new:true}).exec();
  }
 deleteUser(deleteUserData: DeleteUserInput){
      return this.userModel.findByIdAndDelete(deleteUserData.userId).exec(); 
  }
  
 
 

}
