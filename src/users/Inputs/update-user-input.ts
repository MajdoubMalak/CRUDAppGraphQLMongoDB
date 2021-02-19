import { InputType, Field, Int, ID } from "@nestjs/graphql";
import {IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
     @Field()
     @IsNotEmpty()
    userId: String;
    @Field({nullable:true})
    @IsOptional()
    firstname?: String;
    @Field({nullable:true})
    @IsOptional()
    lastname?: String;
    @Field({nullable:true})
    @IsOptional()
    email?: String;
    @Field({nullable:true})
    @IsOptional()
     password?: String;
    @Field({nullable:true})
    @IsOptional()
     phone?: Number;
    

}