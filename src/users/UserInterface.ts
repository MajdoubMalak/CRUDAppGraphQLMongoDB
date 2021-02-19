import{Document} from 'mongoose'
export interface User extends Document {
    readonly firstname:String;
    readonly lastname: String;
    readonly email: String;
    readonly password: String;
    readonly phone: Number;
}