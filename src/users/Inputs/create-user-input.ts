import { InputType, Field, Int, ID } from "@nestjs/graphql";
import { IsEmail } from "class-validator";

@InputType()
export class CreateUserInput {
    // @Field(() => ID)
    // id: String;
    @Field()
    readonly firstname: String;
    @Field()
    readonly lastname: String;
    @Field()
    @IsEmail()
    readonly email: String;
    @Field()
    readonly password: String;
    @Field(()=>Int)
    readonly phone: Number;
    

}