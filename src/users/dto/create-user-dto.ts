import { Field, Int, ObjectType, ID } from "@nestjs/graphql";
//returnType
@ObjectType()
export class UserType {
    @Field(() => ID)
    id: String;
    @Field({nullable: true})
    readonly firstname: String;
    @Field({nullable: true})

    readonly lastname: String;
    @Field({nullable: true})
    readonly email: String;
    @Field()
    readonly password: String;
    @Field(()=>Int,{nullable: true})
    readonly phone: Number;
   
}