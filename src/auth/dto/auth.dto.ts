import { IsEmail, IsNotEmpty } from 'class-validator';
import { AuthBody } from '../interfaces/auth.interface';

export class AuthDTO implements AuthBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
