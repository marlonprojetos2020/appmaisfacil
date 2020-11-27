import {Role} from './role';
import {UserPhoto} from './user-photo';

export interface UserDetails {
    id: number;
    email: string;
    name: string;
    roles: Role[];
    userPhoto: UserPhoto;
}
