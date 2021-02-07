import { User } from 'src/users/schema/User.schema';

export interface Comment {
  user: User;
  text: string;
  name: string;
  avatar: string;
  date?: Date;
}
